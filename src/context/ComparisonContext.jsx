
import { createContext, useState, useContext } from "react";
import { API_URL } from "../services/api";

const ComparisonContext = createContext();

export default function ComparisonProvider({ children }) {
    const [comparison, setComparison] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);

    const clearAll = () => {
        setComparison([]);
        closeModal();
    };

    const addToComparison = async (product) => {
        if (!product || !product.id) return;

        const alreadyComparing = comparison.some(
            (i) => i.id === product.id
        );

        if (alreadyComparing) {
            setIsModalOpen(true);
            return;
        }

        if (comparison.length >= 2) {
            alert(
                "Puoi confrontare solo due oggetti alla volta. Rimuovi un elemento per aggiungerne uno nuovo."
            );
            setIsModalOpen(true);
            return;
        }

        try {
            const response = await fetch(
                `${API_URL}/products/${product.id}`
            );

            const data = await response.json();

            if (data.success && data.product) {
                const updated = [...comparison, data.product];

                setComparison(updated);

                if (updated.length === 2) {
                    setIsModalOpen(true);
                }
            } else {
                throw new Error("Dati prodotto non trovati");
            }
        } catch (error) {
            console.error(
                "Errore durante il recupero del prodotto completo:",
                error
            );

            alert("Errore nel caricamento del prodotto. Riprova.");
        }
    };

    const removeFromComparison = (id) => {
        const updated = comparison.filter(
            (p) => p.id !== id
        );

        setComparison(updated);

        if (updated.length === 0) {
            setIsModalOpen(false);
        }
    };

    return (
        <ComparisonContext.Provider
            value={{
                comparison,
                addToComparison,
                removeFromComparison,
                clearAll,
                isModalOpen,
                openModal,
                closeModal,
            }}
        >
            {children}
        </ComparisonContext.Provider>
    );
}

export function useComparison() {
    return useContext(ComparisonContext);
}


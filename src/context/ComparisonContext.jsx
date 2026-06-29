import { createContext, useState, useContext } from "react";

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

        const alreadyComparing = comparison.some((i) => i.id === product.id);
        if (alreadyComparing) {
            alert("Questo oggetto è già nel tuo calderone!");
            return;
        }


        try {
            const response = await fetch(`http://localhost:3001/products/${product.id}`);
            const data = await response.json();

            if (data.success && data.product) {
        
                setComparison([...comparison, data.product]);
            } else {
                throw new Error("Dati prodotto non trovati");
            }
        } catch (error) {
            console.error("Errore durante il recupero del prodotto completo:", error);
            alert("Errore nel caricamento del prodotto. Riprova.");
        }
    };

    const removeFromComparison = (id) => {
        setComparison((prev) => prev.filter((p) => p.id !== id));
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
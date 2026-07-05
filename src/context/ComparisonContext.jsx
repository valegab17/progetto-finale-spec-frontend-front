import { createContext, useState, useContext } from "react";
import { API_URL } from "../services/api";
const ComparisonContext = createContext(null);

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

        if (comparison.length >= 2) {
            alert("Puoi confrontare al massimo 2 prodotti alla volta!");
            return;}


            try {
                const response = await fetch(`${API_URL}/products/${product.id}`);
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
        const context = useContext(ComparisonContext)
        if (!context) {
            throw new Error("Questo hook può essere usato solo all'interno del ComparisonContext")
        }
        return context;
    }
import { useEffect } from "react";
import { useComparison } from "../context/ComparisonContext";

export default function Modal() {
    const {
        comparison,
        removeFromComparison,
        clearAll,
        isModalOpen,
        closeModal,
        openModal
    } = useComparison();

    useEffect(() => {
        if (comparison.length === 2) {
            openModal();
        }
    }, [comparison.length, openModal]);

    useEffect(() => {
        if (comparison.length === 0 && isModalOpen) {
            closeModal();
        }
    }, [comparison.length, isModalOpen, closeModal]);

    if (!isModalOpen) return null;

    return (
        <div className="m-overlay">
            <div className="m-content">

                <h2>Comparatore</h2>

                <div className="m-comparison">  
                    {comparison.map((p) => (
                        <div key={p.id} className="m-item">
                            <span className="m-title">{p.title}</span>
                            <p>Prezzo: {p.price}€</p>
                            <img src={p.img} alt={p.title} />
                            <button onClick={() => removeFromComparison(p.id)} className="m-remove">
                                Rimuovi
                            </button>
                        </div>
                    ))}
                </div>
                {comparison.length > 0 && (
                    <button onClick={clearAll} className="m-clear-btn">
                        Svuota tutto il Calderone
                    </button>
                )}
            </div>
        </div>
    );
}
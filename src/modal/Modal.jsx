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

    if (!isModalOpen) return null;

    return (
        <div className="m-overlay" onClick={closeModal}>
            <div className="m-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={closeModal} className="m-close-btn">✕</button>

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
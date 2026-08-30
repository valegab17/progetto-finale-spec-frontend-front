import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useComparison } from "../context/ComparisonContext";
import { useProduct } from "../hooks/useProductById"; // Hook corretto

export default function ProductCard({ product }) {
    const { addToFavorites, removeFromFavorites, isInFavorites } = useFavorites();
    const { addToComparison } = useComparison();

    // Recuperiamo il dettaglio completo per avere accesso a .img
    // Usiamo l'ID del prodotto passato come prop
    const { product: fullProduct } = useProduct(product.id);

    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (isInFavorites(product.id)) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    const handleComparisonClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToComparison(product);
    };

    return (
        <Link to={`/prodotto/${product.id}`}>
            <div className="product-card">
                <button onClick={handleFavoriteClick} className="favorite-btn-category">
                    {isInFavorites(product.id) ? "❤️" : "🖤"}
                </button>
                <button onClick={handleComparisonClick} className="compare-btn">
                    Confronta
                </button>

                <div className="product-title-wrapper">
                    {fullProduct ? (
                        <img
                            src={fullProduct.img}
                            alt={fullProduct.title}
                            className="product-icon-small"
                        />
                    ) : (
                        <div className="loading-icon">Caricamento...</div>
                    )}

                    <h3 className="product-t">{product.title}</h3>
                </div>
            </div>
        </Link>
    );
}
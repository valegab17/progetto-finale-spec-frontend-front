import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useComparison } from "../context/ComparisonContext";

export default function ProductCard({ product }) {
    const { addToFavorites, removeFromFavorites, isInFavorites } = useFavorites();
    const { addToComparison } = useComparison()
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

                <button onClick={handleFavoriteClick} className="favorite-btn">
                    {isInFavorites(product.id) ? "❤️" : "🖤"}
                </button>
                <button onClick={handleComparisonClick} className="compare-btn">
                    Confronta
                </button>
                <div className="product-title-wrapper">
                    <img
                        src={`/icons/${product.category}.png`}
                        alt={product.category}
                        className="product-icon-small"
                    />
                    <h3 className="product-t">{product.title}</h3>
                </div>

            </div>
        </Link>
    );
}
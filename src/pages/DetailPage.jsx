import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProductById";
import { useFavorites } from "../context/FavoritesContext";

export default function DetailPage() {
    const { id } = useParams();
    const { product } = useProduct(id);
    const { addToFavorites, removeFromFavorites, isInFavorites } = useFavorites();

    if (!product) return <p>Caricamento magia in corso...</p>;

    const handleFavoriteClick = () => {
        if (isInFavorites(product.id)) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    return (
        <div className="detail-container">

            <img src={product.img} alt={product.title} />

            <div className="detail-info">

                <h1>{product.title}</h1>

                <p>{product.description}</p>
                <p>Prezzo: € {product.price}</p>

                {product.ingredients && (
                    <p>{product.ingredients}</p>
                )}

                <p className="danger-level">
                    Livello Pericolo: {product.dangerLevel}
                </p>

                    <button onClick={handleFavoriteClick} className="favorite-btn">
                        {isInFavorites(product.id) ? "❤️" : "🖤"}
                    </button>

               

            </div>
        </div>
    );
}
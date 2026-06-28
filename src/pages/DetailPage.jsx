import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProductById";
import { useFavorites } from "../context/FavoritesContext";

export default function DetailPage() {
    const { id } = useParams();
    const { product } = useProduct(id);
    const { addToFavorites, removeFromFavorites, isInFavorites } = useFavorites();

    if (!product) { return <p>Caricamento magia in corso...</p>; }

    const handleFavoriteClick = () => {
        if (isInFavorites(product.id)) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    return (
        <>
            <div className="detail-container">
                <h1>{product.title}</h1>
                <button onClick={handleFavoriteClick}>
                    {isInFavorites(product.id) ? "❤️" : "🖤"}
                </button>
                <p>{product.description}</p>
                <p>Prezzo: € {product.price}</p>
                
                {/* Controllo di sicurezza se mancano gli ingredienti (es. nei talismani) */}
                {product.ingredients && <p>{product.ingredients}</p>}
                
                <p className="danger-level">Livello Pericolo: {product.dangerLevel}</p>
                <img src={product.img} alt={product.title} />
            </div>
        </>
    );
}
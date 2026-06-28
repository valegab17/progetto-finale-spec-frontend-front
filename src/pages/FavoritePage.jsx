import { useFavorites } from "../context/FavoritesContext"
import ProductCard from "../components/ProductCard"


export default function FavoritePage() {
    const { favorites } = useFavorites()
    return (
        <div className="favorites-container">
            <h1>I tuoi Oggetti Magici Preferiti 🔮</h1>

             {/* //gestisco lo stato vuoto */}
            {favorites.length === 0 ? (
                <div className="empty-state">
                    <p>A quanto pare il tuo grimorio è vuoto..</p>
                    <p>Esplora l'emporio per iniziare la tua collezione! ✨</p>
                </div>
            ) : (
                /* sennò lista prodotti salvati */
                <div className="products-grid">
                    {favorites.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
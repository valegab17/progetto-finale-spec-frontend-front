export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <h3 className="product-t">{product.title}</h3>
            <img src={product.categoryImg} alt={product.category} />
            <p>Prezzo: {product.price}€</p>
        </div>
    );
}
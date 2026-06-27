export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            {/* Wrapper per allineare icona piccola e titolo */}
            <div className="product-title-wrapper">
                <img 
                    src={product.categoryImg} 
                    alt={product.category} 
                    className="product-icon-small" 
                />
                <h3 className="product-t">{product.title}</h3>
            </div>
            
            <p>Prezzo: {product.price}€</p>
        </div>
    );
}
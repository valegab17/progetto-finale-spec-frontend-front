import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
if(products.length === 0){
  return <p className="empty-state" style={{textAlign: 'center'}}>Accidenti strega, questa volta hai proprio sbagliato incantesimo! Affina il tiro, stavi forse cercando qualcos'altro?✨ </p>
}


  return (
    <div className="product-list">
      {products.map((p) => (
       
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
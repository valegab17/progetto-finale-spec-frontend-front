import ProductCard from "./ProductCard"; // Importa il componente che abbiamo appena sistemato

export function ProductList({ products }) {



  return (
    <div className="product-list">
      {products.map((p) => (
       
        <ProductCard key={p.title} product={p} />
      ))}
    </div>
  );
}
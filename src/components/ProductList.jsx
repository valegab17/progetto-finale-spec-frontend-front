import ProductCard from "./ProductCard";

export function ProductList({ products }) {



  return (
    <div className="product-list">
      {products.map((p) => (
       
        <ProductCard key={p.title} product={p} />
      ))}
    </div>
  );
}
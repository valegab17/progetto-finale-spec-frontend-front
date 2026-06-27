import { useProducts } from "../hooks/useProducts";
import { ProductList } from "../components/ProductList";
export default function HomePage() {
    const {products} = useProducts();
    return (
        <>
            <div className="hero-section">
                <img src="#" alt="logo-calderone-strega" />
                <h1 className="title"> IL CALDERONE DELLA STREGA</h1>
            </div>  
            
        <section>
            <h2>I nostri prodotti</h2>
            <ProductList products={products} />
        </section>
        </>

    )

}
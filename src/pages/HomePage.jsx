import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/ProductList";
export default function HomePage() {
    const { products } = useProducts();
    const featured = [...products].sort(() => Math.random() - 0.5).slice(0, 4)
    return (
        <>
            <div className="hero-section">
                <img src="/public/logo.png" alt="logo-calderone-strega" />
                <h1 className="title"> </h1>
            </div>

            <section className="n-arrivi">
                <h2>I nostri nuovi arrivi</h2>
               <ProductList products={featured} />
            </section>
        </>

    )

}
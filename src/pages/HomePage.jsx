import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/ProductList";
export default function HomePage() {
    const { products } = useProducts();
    const featured = [...products].sort(() => Math.random() - 0.5).slice(0, 4)
    return (
        <>
            <div className="top-section">
                <img src="/logo.png" alt="logo-calderone-strega" />
            </div>
            <section className="hero-section">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="hero-video">
                    <source src="/calderone_strega.mp4" />
                </video>
            </section>
            <section className="n-arrivi">
                <h2>I nostri nuovi arrivi</h2>
                <ProductList products={featured} />
            </section>
        </>

    )

}
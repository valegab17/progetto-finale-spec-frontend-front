import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/ProductList";
import CategorySelector from "../components/CategorySelector";
import { useMemo } from "react";

export default function HomePage() {
    const { products } = useProducts();
    const featured = products.slice(0, 4);

    return (
        <main className="home-page">

            <header className="top-section">
                <img src="/logo.png" alt="logo-calderone-strega" />
            </header>

            <section className="hero-section">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="hero-video"
                >
                    <source src="/calderone_strega.mp4" />
                </video>
            </section>

            <section className="content-section">
                <h2>I nostri nuovi arrivi</h2>


                <CategorySelector />

                <ProductList products={featured} />

            </section>

        </main>
    );
}
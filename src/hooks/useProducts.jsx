import { useState, useEffect } from "react";
import { getProducts } from "../services/api";


export function useProduct() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getProducts(); //eseguo la chiamata al mio API 
                setProducts(data) //e salvo i dati
            } catch (err) {
                console.error("Errore nel caricamento dei dati", err);
            }
        }
        loadData();
    }, [])

    return { products }
}
import { useState, useEffect } from "react";
import { getProductsById } from "../services/api";


export function useProduct(id) {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getProductsById(id); //eseguo la chiamata al mio API 
                setProduct(data.product) //e salvo i dati
            } catch (err) {
                console.error("Errore nel caricamento dell'ID", err);
            }
        }
        loadData();
    }, [id])

    return { product }
}
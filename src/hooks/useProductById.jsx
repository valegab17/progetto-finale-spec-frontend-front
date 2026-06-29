import { useState, useEffect } from "react";
import { getProductsById } from "../services/api";

export function useProduct(id) {
    const [product, setProduct] = useState(null);
    
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getProductsById(id); 
                setProduct(data.product);
            } catch (err) {
                console.error("Errore nel caricamento dell'ID", err);
            }
        };
        loadData();
    }, [id]);

    return { product }; 
} 
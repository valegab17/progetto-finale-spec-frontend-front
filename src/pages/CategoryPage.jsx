/*  Logica: Filtra l'array products tenendo solo gli elementi dove p.category === categoryName.  */


import { useParams } from "react-router-dom"
import { useProducts } from "../hooks/useProducts";
import { ProductList } from "../components/ProductList";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DangerFilter from "../components/DangerFilter";
export default function CategoryPage() {
    let { categoryName } = useParams();
    const { products } = useProducts();
    const [searchTerm, setSearchTerm] = useState("");
    const [dangerFilter, setDangerFilter] = useState("Tutti");

    //gestisco la logica del filtro 
    const filteredProducts = products
        .filter(p => p.category.toLowerCase() === categoryName.toLowerCase())
        .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(p => {
            if (dangerFilter === "Tutti") return true;

            return p.dangerLevel.toLowerCase().includes(dangerFilter.toLowerCase());
        })

    return (
        <>
            <SearchBar onSearch={setSearchTerm} />
            <DangerFilter onFilterChange={setDangerFilter} />
            <ProductList products={filteredProducts} />
        </>)


}
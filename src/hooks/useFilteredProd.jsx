import { useState } from "react";

export default function useFilteredProd(products, categoryName) {
    const [searchTerm, setSearchTerm] = useState("");
    const [dangerFilter, setDangerFilter] = useState("Tutti");
    const [sortOrder, setSortOrder] = useState("title-asc")

    //gestisco la logica del filtro 
    const filteredProducts = products
        .filter(p => p.category.toLowerCase() === categoryName.toLowerCase())
        .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(p => {
            if (dangerFilter === "Tutti") return true;

            return p.dangerLevel.toLowerCase().includes(dangerFilter.toLowerCase());
        })
        .sort((a, b) => {
            if (sortOrder === "title-asc") {
                return a.title.localeCompare(b.title)
            }

            else if (sortOrder === "title-desc") {
            return b.title.localeCompare(a.title)
            } else {
                return 0
            }
        })

    return { filteredProducts, setSearchTerm, setDangerFilter, setSortOrder }
}
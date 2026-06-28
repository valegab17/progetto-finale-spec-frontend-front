import { useState } from "react";

export default function useFilteredProd(products, categoryName) {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("title-asc");

    const filteredProducts = products
        // filtro categoria da URL
        .filter(p => {
            if (!categoryName || categoryName === "Tutte") return true;

            return p.category.toLowerCase() === categoryName.toLowerCase();
        })

        // ricerca
        .filter(p =>
            p.title.toLowerCase().includes(searchTerm.toLowerCase())
        )

        // ordinamento
        .sort((a, b) => {
            if (sortOrder === "title-asc") {
                return a.title.localeCompare(b.title);
            }

            if (sortOrder === "title-desc") {
                return b.title.localeCompare(a.title);
            }

            return 0;
        });

    return {
        filteredProducts,
        setSearchTerm,
        setSortOrder
    };
}
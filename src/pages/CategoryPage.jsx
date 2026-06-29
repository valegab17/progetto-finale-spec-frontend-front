import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import useFilteredProd from "../hooks/useFilteredProd";

import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import SortSelector from "../components/SortSelector";
import CategorySelector from "../components/CategorySelector";

export default function CategoryPage() {
    const { categoryName } = useParams();
    const { products } = useProducts();

    const {
        filteredProducts,
        setSearchTerm,
        setSortOrder
    } = useFilteredProd(products, categoryName);

    return (
        <>
{            <CategorySelector />
}
            <SearchBar onSearch={setSearchTerm} />

            <SortSelector onSort={setSortOrder} />

            <ProductList products={filteredProducts} />
        </>
    );
}
/*  Logica: Filtra l'array products tenendo solo gli elementi dove p.category === categoryName.  */

import { useParams } from "react-router-dom"
import { useProducts } from "../hooks/useProducts";
import { ProductList } from "../components/ProductList";
import  useFilteredProd  from "../hooks/useFilteredProd";
import SearchBar from "../components/SearchBar";
import DangerFilter from "../components/DangerFilter";
import SortSelector from "../components/SortSelector";
export default function CategoryPage() {
    let { categoryName } = useParams();
    const { products } = useProducts();
    const { filteredProducts, setSearchTerm, setDangerFilter, setSortOrder }
        = useFilteredProd(products, categoryName)

    return (
        <>
            <SearchBar onSearch={setSearchTerm} />
            <DangerFilter onFilterChange={setDangerFilter} />
            <SortSelector onSort = {setSortOrder} />
            <ProductList products={filteredProducts} />
        </>)


}
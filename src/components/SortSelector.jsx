export default function SortSelector({onSort, sortValue}){
    return(
        <>
        <select value={sortValue} onChange={(e => onSort(e.target.value))}>
            <option value="title-asc"> A - Z</option>
            <option value="title-desc"> Z - A</option>
          
        </select>
        </>
    )
}
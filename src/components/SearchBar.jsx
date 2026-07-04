
export default function SearchBar({ onSearch, searchValue }) {
    return (
        <input type="text"
          placeholder="Cosa cerchi strega?"
          value={searchValue}
          onChange={(e) => onSearch(e.target.value)}/>
    )
}
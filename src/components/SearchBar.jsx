
export default function SearchBar({ onSearch }) {
    return (
        <input type="text"
          placeholder="Cosa cerchi strega?"
          onChange={(e) => onSearch(e.target.value)}/>
    )
}
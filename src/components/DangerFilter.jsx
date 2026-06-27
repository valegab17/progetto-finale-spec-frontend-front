export default function DangerFilter({ onFilterChange }) {
    return (
        <select onChange={(e) => onFilterChange(e.target.value)}>
            <option value="Tutti">Tutti i livelli</option>
            <option value="Basso">Basso</option>
            <option value="Medio">Medio</option>
            <option value="Alto">Alto</option>
        </select>
    );
}
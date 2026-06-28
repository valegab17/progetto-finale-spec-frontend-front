import { useNavigate } from "react-router-dom";

export default function CategorySelector() {
    const navigate = useNavigate();

    const handleChange = (e) => {
        const category = e.target.value;

        if (category === "Tutte") {
            navigate("/");
        } else {
            navigate(`/categoria/${category}`);
        }
    };

    return (
        <select onChange={handleChange}>
            <option value="Tutte">Tutte le categorie</option>
            <option value="pozioni">Pozioni</option>
            <option value="talismani">Talismani</option>
            <option value="strumenti">Strumenti</option>
            <option value="divinazione">Divinazione</option>
            <option value="incensi">Incensi</option>
        </select>
    );
}
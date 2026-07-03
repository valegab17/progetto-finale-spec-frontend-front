import { useNavigate, useParams } from "react-router-dom";

export default function CategorySelector() {
    const navigate = useNavigate();
    const { categoryName } = useParams(); 

    const handleChange = (e) => {
        const category = e.target.value;

        if (category === "Tutte") {
            navigate("/");
        } else {
            navigate(`/categoria/${category}`);
        }
    };

    return (
      
        <select value={categoryName || "Tutte"} onChange={handleChange}>
            <option value="Tutte">Tutte le categorie</option>
            <option value="Pozioni">Pozioni</option>
            <option value="Talismani">Talismani</option>
            <option value="Strumenti">Strumenti</option>
            <option value="Divinazione">Divinazione</option>
            <option value="Incensi">Incensi</option>
        </select>
    );
}
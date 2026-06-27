import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
        <nav><NavLink to= "/"> 🡨</NavLink></nav>
            <NavLink to="/categoria/pozioni"><img src="/imgs/category/cat_pozioni.png" alt="categoria_pozioni" /></NavLink>
            <NavLink to="/categoria/divinazione"><img src="/imgs/category/divinazione.png" alt="categoria_divinazione" /></NavLink>
            <NavLink to="/categoria/incensi"><img src="/imgs/category/incensi.png" alt="categoria_incensi" /></NavLink>
            <NavLink to="/categoria/strumenti"><img src="/imgs/category/strumenti.png" alt="categoria_strumenti" /></NavLink>
            <NavLink to="/categoria/talismani"><img src="/imgs/category/talismani.png" alt="categoria_talismani" /></NavLink>
        </>
    )
}
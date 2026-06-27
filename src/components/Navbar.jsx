import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav><NavLink to="/"> 🡨</NavLink></nav>
            <nav className="nav-menu-bottom">
                <NavLink to="/categoria/pozioni"><img src="/imgs/category/cat_pozioni.png" alt="pozioni" /></NavLink>
                <NavLink to="/categoria/divinazione"><img src="/imgs/category/divinazione.png" alt="divinazione" /></NavLink>
                <NavLink to="/categoria/incensi"><img src="/imgs/category/incensi.png" alt="incensi" /></NavLink>
                <NavLink to="/categoria/strumenti"><img src="/imgs/category/strumenti.png" alt="strumenti" /></NavLink>
                <NavLink to="/categoria/talismani"><img src="/imgs/category/talismani.png" alt="talismani" /></NavLink>
            </nav>
        </>
    )
}
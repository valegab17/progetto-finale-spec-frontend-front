import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (

        <>

            <nav className="nav-menu-bottom">
                <NavLink to="/" style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: '1', color: '#482515', display: 'flex', alignItems: 'center' }}>&#8592;</NavLink>
                <NavLink to="/categoria/pozioni"><img src="/imgs/category/cat_pozioni.png" alt="pozioni" /></NavLink>
                <NavLink to="/categoria/divinazione"><img src="/imgs/category/divinazione.png" alt="divinazione" /></NavLink>
                <NavLink to="/categoria/incensi"><img src="/imgs/category/incensi.png" alt="incensi" className="incensi" /></NavLink>
                <NavLink to="/categoria/strumenti"><img src="/imgs/category/strumenti.png" alt="strumenti" /></NavLink>
                <NavLink to="/categoria/talismani"><img src="/imgs/category/talismani.png" alt="talismani" /></NavLink>
                <NavLink to="/favorites" ><img src="/icons/wish_list.png" alt="wishlist" /></NavLink>
            </nav>
        </>
    )
}
import { Link } from "react-router-dom";

import { FaRegSquare } from "react-icons/fa";

import "./menu.scss";

export function Menu({ handleCloseMenu }) {
    return (
        <nav id="menu">
            <ul className="menu-list">
                <li className="menu-item">
                    <Link className="menu-link" to="/" onClick={handleCloseMenu}>
                        <FaRegSquare className="menu-icon"/> Início
                    </Link>
                </li>
                <li className="menu-item">
                    <Link className="menu-link" to="/sobre"  onClick={handleCloseMenu}>
                        <FaRegSquare className="menu-icon"/> Sobre mim
                    </Link>
                </li>
                <li className="menu-item">
                    <Link className="menu-link" to="/projetos" onClick={handleCloseMenu}>
                        <FaRegSquare className="menu-icon"/>Projetos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
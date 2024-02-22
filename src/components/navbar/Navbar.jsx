import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import "./navbar.scss";

import Menu from "./menu/Menu";

import logo from "../../assets/logo/pg.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
    const handleOpenMenu = () => {
        const menu = document.querySelector('#menu');
        const navbar = document.querySelector('#navbar-mobile');
        const openMenuIcon = document.querySelector('.open-menu');
        const closeMenuIcon = document.querySelector('.close-menu');
        if(navbar && menu) {
            menu.style.top = "100%";
            openMenuIcon.style.display = "none";
            closeMenuIcon.style.display = "block";
        };
    }
    const handleCloseMenu = () => {
        const menu = document.querySelector('#menu');
        const navbar = document.querySelector('#navbar-mobile');
        const openMenuIcon = document.querySelector('.open-menu');
        const closeMenuIcon = document.querySelector('.close-menu');
        if(navbar && menu) {
            menu.style.top = "-100vh";
            openMenuIcon.style.display = "block";
            closeMenuIcon.style.display = "none";
        };
    }
    return (
        <>
            <header id="navbar-mobile">
                <div className="navbar-items">
                    <Link className="nav-link" to="/">
                        <img className="logo" src={logo} alt="Logotipo de cor branca, onde reune as letras P e G combinadas, referência a Pedro Gabriel." />
                    </Link>
                    <FiMenu className="open-menu" onClick={handleOpenMenu} />
                    <MdClose className="close-menu" onClick={handleCloseMenu}/>
                </div>
                <Menu handleCloseMenu={handleCloseMenu} />
            </header>
            <header id="navbar-large-screen">
                <Link className="nav-link" to="/">
                    <img className="logo" src={logo} alt="Logotipo de cor branca, onde reune as letras P e G combinadas, referência a Pedro Gabriel." />
                </Link>
                <nav className="nav-container">
                    <ul className="nav-content">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sobre">Sobre mim</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projetos">Projetos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
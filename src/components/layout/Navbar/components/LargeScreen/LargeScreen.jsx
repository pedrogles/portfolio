import { Link } from "react-router-dom";
import { scrollToTop } from "../../../../../utils/scrollToTop";
import { SECTIONS } from "../../../../../constants/sections";
import logo from "../../../../../assets/logo/pg.svg";

import "./largescreen.scss";

export function LargeScreen() {
    return (
        <header id="header-lg">
            <Link to="/" onClick={() => scrollToTop()}>
                <img 
                    className="logo" 
                    src={logo} 
                    alt="Logotipo de cor branca, onde reune as letras P e G combinadas, referência a Pedro Gabriel." 
                />
            </Link>
            <nav className="menu">
                <ul className="menu-list">
                    {SECTIONS.map((section) => {
                        return (
                            <li className="menu-item" key={section.id}>
                                <Link className="menu-link" to={section.path} onClick={() => scrollToTop()}>
                                    {section.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};
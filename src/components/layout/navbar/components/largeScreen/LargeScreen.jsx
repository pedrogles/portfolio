import { Link } from "react-router-dom";
import { scrollToTop } from "../../../../../utils/scrollToTop";
import { sections } from "../../../../../mocks/pageSections";
import logo from "../../../../../assets/logo/pg.svg";

import "./largescreen.scss";

export function LargeScreen() {
    return (
        <header id="header-lg">
            <Link className="home-link-lg" to="/" onClick={() => scrollToTop()}>
                <img 
                    className="logo" 
                    src={logo} 
                    alt="Logotipo de cor branca, onde reune as letras P e G combinadas, referência a Pedro Gabriel." 
                />
            </Link>
            <nav className="menu-lg">
                <ul className="menu-list-lg">
                    {sections.map((section) => {
                        return (
                            <li className="menu-item-lg" key={section.id}>
                                <Link className="menu-link-lg" to={section.path} onClick={() => scrollToTop()}>
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
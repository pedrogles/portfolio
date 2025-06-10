import { Link } from "react-router-dom";
import { scrollToTop } from "../../../../../utils/scrollToTop";
import { SECTIONS } from "../../../../../constants/sections";
import { useState } from "react";
import { Skeleton } from "../../../../";
import logo from "../../../../../assets/logo/pg.svg";

import "./largescreen.scss";

export function LargeScreen() {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <header id="header-lg">
            <Link className="link-logo" to="/" onClick={() => scrollToTop()}>
                {isLoading && <Skeleton width="3rem" height="3rem" rounded={true} />}
                <img 
                    className="logo" 
                    src={logo} 
                    alt="Logotipo de cor branca, onde reune as letras P e G combinadas, referência a Pedro Gabriel."
                    style={{ display: isLoading ? 'none' : 'block' }}
                    onLoad={() => setIsLoading(false)} 
                    onError={() => setIsLoading(false)} 
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
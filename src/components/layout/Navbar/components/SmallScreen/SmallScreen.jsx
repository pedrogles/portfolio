import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../../../../utils/scrollToTop";

import logo from "../../../../../assets/logo/pg.svg";

import { SECTIONS } from "../../../../../constants/sections";
import { useNavbar } from "../../../../../hooks/useNavbar";
import { Divider, Skeleton } from "../../../../";
import { useState } from "react";

import "./smallscreen.scss";

export function SmallScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const { isOpen, handleClick, handleChangeState } = useNavbar();
    return (
        <header id="header-sm">
            <section className="header-content">
                <Link className="link-logo" to="/" onClick={() => scrollToTop()}>
                    {isLoading && <Skeleton width="2rem" height="2rem" rounded />}
                    <img 
                        className="logo" 
                        src={logo} 
                        alt="Logotipo de cor branca, onde reune as letras P e G combinadas, referência a Pedro Gabriel." 
                        style={{ display: isLoading ? 'none' : 'block' }}
                        onLoad={() => setIsLoading(false)} 
                        onError={() => setIsLoading(false)}
                    />
                </Link>
                { !isOpen && <FiMenu className="open-menu-button" aria-label="Abrir menu de navegação" onClick={handleChangeState} /> }
                { isOpen && <MdClose className="close-menu-button" aria-label="Fechar menu de navegação" onClick={handleChangeState}/> }
            </section>
            <nav className={`menu ${isOpen ? 'menu-open' : ''}`}>
                <ul className="menu-list">
                    {SECTIONS.map((section) => {
                        return (
                            <li className="menu-item" key={section.id}>
                                <Link className="menu-link" to={section.path} aria-label={section.ariaLabel} onClick={() => handleClick()}>
                                    {section.name}
                                </Link>
                                <Divider/>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};
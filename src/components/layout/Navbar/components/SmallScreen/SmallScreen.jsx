import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../../../../utils/scrollToTop";

import logo from "../../../../../assets/logo/pg.svg";

import { SECTIONS } from "../../../../../constants/sections";
import { useNavbar } from "../../../../../hooks/useNavbar";
import { Divider } from "../../../../";

import "./smallscreen.scss";

export function SmallScreen() {
    const { isOpen, handleClick, handleChangeState } = useNavbar();
    return (
        <header id="header-sm">
            <section className="header-content">
                <Link to="/" onClick={() => scrollToTop()}>
                    <img 
                        className="logo" 
                        src={logo} 
                        alt="Logotipo de cor branca, onde reune as letras P e G combinadas, referência a Pedro Gabriel." 
                    />
                </Link>
                { !isOpen && <FiMenu className="open-menu-button" onClick={handleChangeState} /> }
                { isOpen && <MdClose className="close-menu-button" onClick={handleChangeState}/> }
            </section>
            <nav className={`menu ${isOpen ? 'menu-open' : ''}`}>
                <ul className="menu-list">
                    {SECTIONS.map((section) => {
                        return (
                            <li className="menu-item" key={section.id}>
                                <Link className="menu-link" to={section.path} onClick={() => handleClick()}>
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
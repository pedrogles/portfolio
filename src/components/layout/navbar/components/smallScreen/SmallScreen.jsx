import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../../../../utils/scrollToTop";

import logo from "../../../../../assets/logo/pg.svg";

import "./smallscreen.scss";

import { sections } from "../../../../../mocks/pageSections";
import { useNavbar } from "../../../../../hooks/useNavbar";

export function SmallScreen() {
    const { isOpen, handleClick, handleChangeState } = useNavbar();
    return (
        <header id="header-sm">
            <div className="items-sm">
                <Link to="/" onClick={() => scrollToTop()}>
                    <img 
                        className="logo" 
                        src={logo} 
                        alt="Logotipo de cor branca, onde reune as letras P e G combinadas, referência a Pedro Gabriel." 
                    />
                </Link>
                {!isOpen && <FiMenu className="menu-button" onClick={handleChangeState} />}
                {isOpen && <MdClose className="close-menu-button" onClick={handleChangeState}/>}
            </div>
            <nav className={`menu-sm ${isOpen ? 'menu-sm-open' : ''}`}>
                <ul className="menu-list-sm">
                    {sections.map((section) => {
                        return (
                            <li className="menu-item-sm" key={section.id}>
                                <Link className="menu-link-sm" to={section.path} onClick={() => handleClick()}>
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
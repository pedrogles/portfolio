import { links } from "../../../mocks/data";

import "./footer.scss";

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer id="footer">
            <ul className="link-icons">
                {links.map((link, key) => {
                    return (
                        <li key={key}>
                            <a className="link" href={link.href} target="_blank" rel="noopener noreferrer">
                                {link.icon}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <div className="footer-paragraphs">
                <p className="footer-paragraph-location">&copy; {year} - João Pessoa - Paraíba - Brasil</p>
                <p className="footer-paragraph-dev">Desenvolvimento e Design por Pedro Gabriel.</p>
            </div>
        </footer>
    );
};
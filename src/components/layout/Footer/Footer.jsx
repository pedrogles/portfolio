import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FiMail } from "react-icons/fi";

import "./footer.scss";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const links = [
        { id: 0, icon: <SiLinkedin/>, href: "https://www.linkedin.com/in/pedrogles/" }, 
        { id: 1, icon: <SiGithub/>, href: "https://github.com/pedrogles" },
        { id: 2, icon: <SiWhatsapp/>, href: "https://api.whatsapp.com/send?phone=5583996082302" },
        { id: 3, icon: <FiMail/>, href: "mailto:pedrogabriellima@gmail.com" }
    ];
    return (
        <footer id="footer">
            <ul className="icons">
                {links.map((link) => {
                    return (
                        <li className="item" key={link.id}>
                            <a className="icon" href={link.href} target="_blank" rel="noopener noreferrer">
                                {link.icon}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <section className="info-section">
                <p className="p-location">&copy; {currentYear} - João Pessoa - Paraíba - Brasil</p>
                <p className="p-dev">Desenvolvimento e Design por Pedro Gabriel.</p>
            </section>
        </footer>
    );
};
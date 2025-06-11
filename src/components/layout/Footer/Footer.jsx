import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FiMail } from "react-icons/fi";

import "./footer.scss";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const links = [
        { 
            id: 0, 
            icon: <SiLinkedin aria-hidden="true" focusable="false" title="Link para Linkedin" />, 
            href: "https://www.linkedin.com/in/pedrogles/", 
            ariaLabel: 'Link para Linkedin do Pedro (abre em nova guia)'
         }, 
        { 
            id: 1, 
            icon: <SiGithub aria-hidden="true" focusable="false" title="Link para Github" />, 
            href: "https://github.com/pedrogles", 
            ariaLabel: 'Link para Github do Pedro (abre em nova guia)'
         },
        { 
            id: 2, 
            icon: <SiWhatsapp aria-hidden="true" focusable="false" title="Link para Whatsapp" />, 
            href: "https://api.whatsapp.com/send?phone=5583996082302", 
            ariaLabel: 'Link para Whatsapp do Pedro (abre em nova guia)'
         },
        { 
            id: 3, 
            icon: <FiMail aria-hidden="true" focusable="false" title="Link para enviar email" />, 
            href: "mailto:pedrogabriellima@gmail.com", 
            ariaLabel: 'Link para enviar email para Pedro (abre em nova guia)'
         }
    ];
    return (
        <footer id="footer">
            <nav aria-label="Redes sociais do Pedro">
                <ul className="icons">
                    {links.map((link) => {
                        return (
                            <li className="item" key={link.id}>
                                <a 
                                    className="icon" 
                                    href={link.href} 
                                    aria-label={link.ariaLabel} 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                        {link.icon}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <section className="info-section">
                <p className="p-location">&copy; {currentYear} - João Pessoa - Paraíba - Brasil</p>
                <p className="p-dev">Desenvolvimento e Design por Pedro Gabriel.</p>
            </section>
        </footer>
    );
};
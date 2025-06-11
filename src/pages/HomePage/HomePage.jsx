import { FixedButtons } from "../../components";
import { RouterButton } from "./components";
import { scrollToTop } from "../../utils/scrollToTop";

import logotipo from "../../assets/logo/pg.svg";

import "./homepage.scss";

export default function HomePage() {
    return (
        <main id="home-page">
            <img 
                className="home-logo" 
                src={logotipo} 
                alt="Logotipo de cor branca, onde reune as letras P e G combinadas, referência a Pedro Gabriel."
            />
            <p className="home-title">
                Do conceito ao código: <em>Criando experiências que conectam.</em>
            </p>
            <div className="home-buttons">
                <RouterButton to="/sobre" aria-label="Ir para a página Sobre mim" onClick={() => scrollToTop()}>
                    Sobre mim
                </RouterButton>
                <RouterButton to="/projetos" aria-label="Ir para a página Projetos" onClick={() => scrollToTop()}>
                    Projetos
                </RouterButton>
            </div>
            <FixedButtons/>
        </main>
    )
} 
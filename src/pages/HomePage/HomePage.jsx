import { RouterButton, FixedButtons } from "../../components";

import LogoPG from "../../assets/logo/pg.svg";

import "./homepage.scss";

export function HomePage() {
    return (
        <main id="home-page">
            <img className="home-page-logo" src={LogoPG} alt="Logotipo de cor branca, onde reune as letras P e G combinadas, referência a Pedro Gabriel."/>
            <p className="home-page-paragraph">Seja bem-vindo(a) ao meu Portfólio!</p>
            <div className="home-page-buttons">
                <RouterButton name="Sobre mim" to="/sobre"/>
                <RouterButton name="Projetos" to="/projetos"/>
            </div>
            <FixedButtons/>
        </main>
    )
} 
import "./home.scss";

import pg from "../../assets/logo/pg.svg";

import { RouterButton, FixedButtons } from "../../components/buttons";

export default function Home() {

    return (
        <main id="home-page">
            <img className="home-page-logo" src={pg} alt="Logotipo de cor branca, onde reune as letras P e G combinadas, referência a Pedro Gabriel."/>
            <p className="home-page-paragraph">Seja bem-vindo &#40;a&#41; ao meu Portfólio!</p>
            <div className="home-page-buttons">
                <RouterButton to="/sobre">
                    Sobre mim
                </RouterButton>
                <RouterButton to="/projetos">
                    Projetos
                </RouterButton>
            </div>
            <FixedButtons/>
        </main>
    )
} 
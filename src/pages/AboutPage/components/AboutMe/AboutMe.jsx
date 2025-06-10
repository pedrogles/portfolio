import { Section } from '../../../../components';
import { ProfileCard } from '..';

import './aboutme.scss';

export function AboutMe() {
    const apresentation = [
        "Sou formado em Sistemas para Internet e gosto de transformar ideias em soluções eficientes, escaláveis e com boa performance.",
        "Tenho experiência com componentização, refatoração de projetos legados e foco total na experiência de quem usa. Gosto de código limpo, bem organizado e de trabalhar com metodologias ágeis no dia a dia.",
        "Além da parte técnica, levo a sério a comunicação, o trabalho em equipe e estar sempre aprendendo e melhorando",
    ];
    return (
        <Section>
            <ProfileCard />
            <article className='apresentation'>
                {apresentation.map((paragraph, key) => {
                    return (
                        <p key={key} className="about-paragraph">{paragraph}</p>
                    )
                })}
            </article>
        </Section>
    );
};
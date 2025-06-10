import { Section, Title } from '../../../../components';
import { ListItem } from '..';

import './experiences.scss';

export function Experiences() {
    const experiences = [
        {
            id: 0,
            subtitle: "iUUL",
            paragraph: "Out. 2024 - Atualmente",
            title: "Desenvolvedor Front-end"
        },
        {
            id: 1,
            subtitle: "Go Beesiness",
            paragraph: "Fev - Jun. 2024",
            title: "Desenvolvedor Front-end"
        },
        {
            id: 2,
            subtitle: "Tribunal Regional Eleitoral da Paraíba",
            paragraph: "Jan. 2023 - Fev. 2024",
            title: "Web Design"
        },
        {
            id: 3,
            subtitle: "UNIESP - Centro Universitário",
            paragraph: "Jan. 2022 - Jun. 2022",
            title: "Suporte Técnico"
        }
    ];
    return (
        <Section>
            <Title name="Experiências" />
            <ul className="experiences-list">
                {experiences.map((experience) => {
                    return (
                        <ListItem
                            key={experience.id}
                            title={experience.title}
                            subtitle={experience.subtitle}
                            paragraph={experience.paragraph}
                        />
                    )
                })}
            </ul>
        </Section>
    );
};
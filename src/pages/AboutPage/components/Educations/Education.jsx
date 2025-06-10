import { Section, Title } from '../../../../components';
import { ListItem } from '..';

import './educations.scss';

export function Educations() {
    const educations = [
        {
            id: 1,
            subtitle: "UNIESP - Centro Universitário",
            paragraph: "Jul. 2021 - Jan. 2024",
            title: "Sistemas para Internet"
        },
        {
            id: 2,
            subtitle: "Rocketseat",
            paragraph: "Jul. 2023 - Out. 2023",
            title: "Desenvolvimento Web Full Stack"
        },
        {
            id: 3,
            subtitle: "iTalents",
            paragraph: "Set. 2024 - Out. 2024",
            title: "Bootcamp Front-end Development"
        }
    ];
    return (
        <Section>
            <Title name="Formação" />
            <ul className="education-list">
                {educations.map((education) => {
                    return (
                        <ListItem
                            key={education.id}
                            title={education.title}
                            subtitle={education.subtitle}
                            paragraph={education.paragraph}
                        />
                    )
                })}
            </ul>
        </Section>
    );
};
import { ListItem, Section, Title } from '../../../../components';
import { educations } from '../../../../mocks/data';

import './educations.scss';

export function Educations() {
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
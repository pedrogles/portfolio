import { Section, Title } from '../../../../components';
import { ListItem } from '../';
import { experiences } from '../../../../mocks/data';

import './experiences.scss';

export function Experiences() {
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
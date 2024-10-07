import { Section, Title } from '../../../../components';
import { skills } from '../../../../mocks/data';

import './skills.scss';

export function Skills() {
    return (
        <Section>
            <Title name="Competências" />
            <ul className="skills-retangle-list">
                {skills.map((skill) => {
                    return (
                        <li className="retangle-item" key={skill.id}>
                            <div className="retangle-icon">{skill.icon}</div>
                            <p className="retangle-name">{skill.name}</p>
                        </li>
                    )
                })}
            </ul>
        </Section>
    );
};
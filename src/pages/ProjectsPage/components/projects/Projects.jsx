import { projects } from '../../../../mocks/data';
import { Section, Title } from '../../../../components';
import { Project } from '../';

import './projects.scss';

export function Projects() {
    return (
        <Section>
            <Title name="Projetos Recentes" />
            <ul className="projects-list">
                {projects.map((project) => {
                    return (
                        <Project key={project.id} project={project} />
                    )
                })}
            </ul>
        </Section>
    );
};
import Section from "../../components/section/Section";

import { Title } from "../../components/texts/title/Title";
import { FixedButtons } from "../../components/buttons/Buttons";

import "./projects.scss";

export default function Projects({ data }) {
    const projects = data.user.projects;
    return (
        <main id="projects-page">
            <Section>
                <Title name="Projetos Recentes" />
                <ul className="projects-list">
                {projects.map((project) => {
                    return (
                        <li className="project-item" key={project.id}>
                            <img className="project-image" src={project.img} alt={project.alt} /> 
                            <div className="project-content">
                                <h4 className="project-title">{project.title}</h4>
                                <p className="project-paragraph">{project.paragraph}</p>
                                <a className="project-a" href={project.link} target="_blank" rel="noopener noreferrer">
                                    {project.text}
                                </a>
                            </div>
                        </li>
                    )
                })}
                </ul>
            </Section>

            <FixedButtons />
        </main>
    )
}
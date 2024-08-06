import Section from "../../components/section/Section";

import { H3, H4 } from "../../components/texts/index";
import { FixedButtons } from "../../components/buttons";

import { data } from "../../utils/data";

import "./projects.scss";

export default function Projects() {
    const projects = data.user.projects;
    return (
        <main id="projects-page">
            <Section>
                <H3>Projetos Recentes</H3>
                <ul className="projects-list">
                {projects.map((project) => {
                    return (
                        <li className="project-item" key={project.id}>
                            <img className="project-image" src={project.img} alt={project.alt} /> 
                            <div className="project-content">
                                <H4>{project.title}</H4>
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
import Section from "../../components/section/Section";
import Line from "../../components/line/Line";

import { FixedButtons } from "../../components/buttons/Buttons";

import "./projects.scss";

export default function Projects({ data }) {
    const projects = data.user.projects;
    const technologies = data.user.technologies;
    const tools = data.user.tools;
    return (
        <main id="projects-page">
            <Section>
                <h3 className="projects-title">Projetos Recentes</h3>
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

            <Line/>

            <Section>
                <h3 className="technologies-title">Tecnologias</h3>
                <ul className="technologies-retangle-list">
                {technologies.map((technologie) => {
                    return (
                        <li className="retangle-item" key={technologie.id}>
                            <div className="retangle-icon">{technologie.icon}</div>
                            <p className="retangle-name">{technologie.name}</p>
                        </li>
                    )
                })}
                </ul>
            </Section>

            <Line/>

            <Section>
                <h3 className="tools-title">Ferramentas</h3>
                <ul className="tools-retangle-list">
                {tools.map((tool, key) => {
                    return (
                        <li className="retangle-item" key={key}>
                            <div className="retangle-icon">
                                {tool.icon}
                            </div>
                            <p className="retangle-name">
                                {tool.name}
                            </p>
                        </li>
                    )
                })}
                </ul>
            </Section>

            <FixedButtons />
        </main>
    )
}
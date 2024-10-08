import './project.scss';

export function Project({ project }) {
    return (
        <li className="project-item">
            <img className="project-image" src={project.img} alt={project.alt} /> 
            <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-paragraph">{project.paragraph}</p>
                <a className="project-a" href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.text}
                </a>
            </div>
        </li>
    );
};
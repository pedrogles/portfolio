import { Section, Title } from '../../../../components';
import { DiSass } from "react-icons/di";
import { SiAdobephotoshop, SiAdobeillustrator, SiNodedotjs, SiJavascript, SiReact, SiGithub, SiGit, SiHtml5, SiCss3, SiTailwindcss, SiAngular, SiTypescript } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

import './skills.scss';

export function Skills() {
    const skillsList = [
        { id: 0, name: "Angular", icon: <SiAngular /> },
        { id: 1, name: "React", icon: <SiReact /> },
        { id: 2, name: "JavaScript", icon: <SiJavascript /> },
        { id: 3, name: "TypeScript", icon: <SiTypescript /> },
        { id: 4, name: "Node", icon: <SiNodedotjs /> },
        { id: 5, name: "Html5", icon: <SiHtml5 /> },
        { id: 6, name: "Css3", icon: <SiCss3 /> },
        { id: 7, name: "Scss", icon: <DiSass /> },
        { id: 8, name: "Tailwind", icon: <SiTailwindcss /> },
        { id: 9, name: "Git", icon: <SiGit /> },
        { id: 10, name: "Github", icon: <SiGithub /> },
        { id: 11, name: "Figma", icon: <FiFigma /> },
        { id: 12, name: "Photoshop", icon: <SiAdobephotoshop /> },
        { id: 13, name: "Illustrator", icon: <SiAdobeillustrator /> }
    ];
    return (
        <Section>
            <Title name="Competências Técnicas" />
            <ul className="skills-retangle-list">
                {skillsList.map((skill) => {
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
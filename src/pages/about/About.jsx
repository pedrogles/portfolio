import Section from "../../components/section/Section";
import SectionList from "../../components/sectionList/SectionList";
import Line from "../../components/line/Line";

import { H3, H4 } from "../../components/texts/index";
import { FixedButtons } from "../../components/buttons";

import { data } from "../../utils/data";

import "./about.scss";

export default function About() {
    const user = data.user;
    const { aboutme, experiences, educations, skills } = user;
    const { hard, soft} = skills;
    const softSkills = soft.join(', ');
    return (
            <main id="about-page" >
                <Section>
                    <div id="user">
                        <img className="user-image" src={user.image} alt={user.altimage}/>
                        <h2 className="user-name">{user.name}</h2>
                        <p className="user-profession">{user.profession}</p>
                    </div>
                    {aboutme.map((paragraph, key) => {
                        return <p key={key} className="about-paragraph">{paragraph}</p>
                    })}
                </Section>

                <Line/>

                <Section>
                    <H3>Competências</H3>
                    <H4>Soft Skills</H4>
                    <p className="softskills">{softSkills}</p>
                    <H4>Hard Skills</H4>
                    <ul className="hardskills-list">
                        {hard.map((skill) => {
                            return (
                                <li className="hardskills-item" key={skill.id}>
                                    <strong>{skill.name}:</strong> {skill.text}
                                </li>
                            )
                        })}
                    </ul>
                </Section>

                <Line />

                <Section>
                    <H3>Experiências</H3>
                    <ul className="experiences-list">
                    {experiences.map((experience) => {
                        return (
                            <SectionList 
                                key={experience.id} 
                                title={experience.title} 
                                paragraph={experience.paragraph} 
                                subtitle={experience.subtitle} 
                            />
                        )
                    })}
            </ul>
                </Section>

                <Line />

                <Section>
                    <H3>Formação</H3>
                    <ul className="education-list">
                        {educations.map((education) => {
                            return (
                                <SectionList 
                                    key={education.id} 
                                    title={education.title} 
                                    paragraph={education.paragraph} 
                                    subtitle={education.subtitle} 
                                />
                            )
                        })}
                    </ul>
                </Section>
                
                <FixedButtons />
            </main>
    )
}
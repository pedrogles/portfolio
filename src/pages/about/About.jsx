import Section from "../../components/section/Section";
import Line from "../../components/line/Line";

import { Title } from "../../components/texts/title/Title";
import { FixedButtons } from "../../components/buttons/Buttons";

import "./about.scss";

export default function About({ data }) {
    const user = data.user;
    const aboutme = data.user.aboutme;
    const experiences = data.user.experiences;
    const educations = data.user.educations;
    return (
            <main id="about-page" >
                <Section>
                    <div id="user">
                        <img className="user-image" src={user.image} alt={user.altimage}/>
                        <h2 className="user-name">{user.name}</h2>
                        <p className="user-profession">{user.profession}</p>
                    </div>
                    {aboutme.map((paragraph, key) => {
                        return (
                            <p key={key} className="about-paragraph">{paragraph}</p>
                        )
                    })}
                </Section>

                <Line />

                <Section>
                    <Title name="Experiências" />
                    <ul className="experiences-list">
                    {experiences.map((experience) => {
                        return (
                            <li className="item"  key={experience.id}>
                                <h4 className="item-title">{experience.title}</h4>
                                <p className="item-paragraph">{experience.paragraph}</p>
                                <h5 className="item-subtitle">{experience.subtitle}</h5>
                            </li>
                        )
                    })}
            </ul>
                </Section>

                <Line />

                <Section>
                    <Title name="Educação" />
                    <ul className="education-list">
                    {educations.map((education) => {
                        return (
                            <li className="item"  key={education.id}>
                                <h4 className="item-title">{education.title}</h4>
                                <p className="item-paragraph">{education.paragraph}</p>
                                <h5 className="item-subtitle">{education.subtitle}</h5>
                            </li>
                        )
                    })}
            </ul>
                </Section>
                
                <FixedButtons />
            </main>
    )
}
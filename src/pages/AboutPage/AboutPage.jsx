import { Divider, FixedButtons } from "../../components";
import { AboutMe, Skills, Experiences, Educations } from "./components";

import "./aboutpage.scss";

export default function AboutPage() {
    return (
            <main id="about-page" >
                <AboutMe/>
                <Divider/>
                <Educations/>
                <Divider/>
                <Experiences/>
                <Divider/>
                <Skills/>
                <FixedButtons/>
            </main>
    );
};
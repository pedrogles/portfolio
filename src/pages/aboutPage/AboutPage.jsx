import { Line, FixedButtons } from "../../components";
import { AboutMe, Skills, Experiences, Educations } from "./components";

import "./aboutpage.scss";

export function AboutPage() {
    return (
            <main id="about-page" >
                <AboutMe/>

                <Line/>
                <Educations/>
                
                <Line/>
                <Experiences/>
                
                <Line/>
                <Skills/>
                
                <FixedButtons/>
            </main>
    );
};
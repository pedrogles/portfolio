import { Line, FixedButtons } from "../../components";
import { AboutMe, Skills, Experiences, Educations } from "./components";

import "./aboutpage.scss";

export function AboutPage() {
    return (
            <main id="about-page" >
                <AboutMe/>

                <Line/>
                <Skills/>
                
                <Line/>
                <Experiences/>
                
                <Line/>
                <Educations/>
                
                <FixedButtons/>
            </main>
    );
};
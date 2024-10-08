import { FixedButtons } from "../../components";
import { Projects } from "./components";

import "./projectspage.scss";

export function ProjectsPage() {
    return (
        <main id="projects-page">
            <Projects/>
            <FixedButtons/>
        </main>
    );
};
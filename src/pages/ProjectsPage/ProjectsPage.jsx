import { FixedButtons } from "../../components";
import { ProjectsSection } from "./components";


import "./projectspage.scss";

export default function ProjectsPage() {
    return (
        <main id="projects-page">
            <ProjectsSection />
            <FixedButtons/>
        </main>
    );
};
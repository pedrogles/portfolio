import { Routes, Route } from "react-router-dom";

import { HomePage, AboutPage, ProjectsPage } from "./pages";

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="sobre" element={ <AboutPage />}/>
            <Route path="projetos" element={ <ProjectsPage />} />
            <Route path="*" element={ <HomePage/> }/>
            {/* Criar página 404 */}
        </Routes>
    );
};
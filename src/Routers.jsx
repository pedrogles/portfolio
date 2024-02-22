import { Routes, Route } from "react-router-dom";

import { HomePage, AboutPage, ProjectsPage } from "./pages/index";

export default function Routers({data}) {
    return (
        <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="/sobre" element={ <AboutPage data={data} />}/>
            <Route path="/projetos" element={ <ProjectsPage data={data} />} />
            <Route path="*" element={ <HomePage/> }/>
            {/* Criar página 404 */}
        </Routes>
    )
}
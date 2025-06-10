import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { LoadingPage } from "../pages/LoadingPage/LoadingPage";
import { Home, About, Projects } from './pages';

export function AppRoutes() {
    return (
        <Suspense fallback={<LoadingPage />}>
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="sobre" element={ <About />}/>
                <Route path="projetos" element={ <Projects />} />
                <Route path="*" element={ <Home/> }/>
                {/* Criar página 404 */}
            </Routes>
        </Suspense>
    );
};
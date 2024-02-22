import Home from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";

export function HomePage({ data }) {
    return <Home data={data} />
}

export function AboutPage({ data }) {
    return <About data={data} />
}

export function ProjectsPage({ data }) {
    return <Projects data={data} />
}
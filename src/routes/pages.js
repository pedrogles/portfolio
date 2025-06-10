import { lazy } from 'react';

export const Home = lazy(() => import('../pages/HomePage/HomePage'));
export const About = lazy(() => import('../pages/AboutPage/AboutPage'));
export const Projects = lazy(() => import('../pages/ProjectsPage/ProjectsPage'));
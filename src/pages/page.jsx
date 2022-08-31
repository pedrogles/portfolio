import Nav from '../components/navbar/Navbar';
import Home from '../components/home/Home';
import Works from '../components/works/Works';
import Contact from '../components/contact/Contact'; 

export const Page = () => {
    return (
        <>
            <Nav />
            <Home />
            <Works />
            <Contact />
        </>
    );
}
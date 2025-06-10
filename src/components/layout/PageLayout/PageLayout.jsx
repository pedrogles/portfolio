import { Navbar, Footer } from "../..";

export function PageLayout({ children }) {
    return (
        <>
            <Navbar />
                { children }
            <Footer />
        </>
    )
}
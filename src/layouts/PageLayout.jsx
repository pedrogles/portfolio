import { Navbar, Footer } from "../components";

export function PageLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
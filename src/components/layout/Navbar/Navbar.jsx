import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { LargeScreen, SmallScreen } from "./components";

export function Navbar() {
    const isMobile = useMediaQuery('(max-width: 767px)');
    return (
        <>
            {isMobile && <SmallScreen/>}
            {!isMobile && <LargeScreen/>}
        </>
    );
};
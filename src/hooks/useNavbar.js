import { useState } from "react"
import { scrollToTop } from "../utils/scrollToTop";

export const useNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleChangeState = () => {
        setIsOpen(!isOpen);
    };
    const handleClick = () => {
        handleChangeState();
        scrollToTop();
    };
    return { isOpen, handleClick, handleChangeState };
}
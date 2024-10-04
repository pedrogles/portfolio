import { AiOutlineArrowUp, AiOutlineDownload } from "react-icons/ai";
import curriculo from "../../../assets/documents/pedrogabriel-curriculo.pdf";

import "./fixedbuttons.scss";

export function FixedButtons() {
    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    return (
        <div className='fixed-buttons'>
            <button className='button' onClick={topFunction}>
                <AiOutlineArrowUp className='icon'/>
            </button>
            <a className='button' href={curriculo} download>
                <AiOutlineDownload className='icon'/>
            </a>
        </div>
    );
};
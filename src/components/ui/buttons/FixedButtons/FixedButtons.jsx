import { AiOutlineArrowUp, AiOutlineDownload } from "react-icons/ai";
import { scrollToTop } from "../../../../utils/scrollToTop";

import curriculum from "../../../../assets/documents/pedrogabriel-curriculo.pdf";

import "./fixedbuttons.scss";

export function FixedButtons() {
    return (
        <div className='fixed-buttons'>
            <button className='button' onClick={() => scrollToTop()}>
                <AiOutlineArrowUp className='icon'/>
            </button>
            <a className='button' href={curriculum} download>
                <AiOutlineDownload className='icon'/>
            </a>
        </div>
    );
};
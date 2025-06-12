import { AiOutlineArrowUp, AiOutlineDownload } from "react-icons/ai";
import { scrollToTop } from "../../../utils/scrollToTop";

import curriculum from "../../../assets/documents/curriculo-pedro-gabriel.pdf";

import "./fixedbuttons.scss";

export function FixedButtons() {
    return (
        <div className='fixed-buttons'>
            <button 
                className='button' 
                aria-label="Ir para o topo da página" 
                title="Ir para o topo da página" 
                onClick={() => scrollToTop()}>
                    <AiOutlineArrowUp 
                        className='icon'
                        aria-hidden="true" 
                        focusable="false"/>
            </button>
            <a 
                className='button' 
                href={curriculum}
                aria-label="Download de portfolio em PDF" 
                title="Download de portfolio em PDF"  
                download="Curriculo 2025 - Pedro Gabriel Lima e Silva">
                    <AiOutlineDownload 
                        className='icon'
                        aria-hidden="true" 
                        focusable="false"/>
            </a>
        </div>
    );
};
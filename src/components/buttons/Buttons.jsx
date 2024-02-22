import { AiOutlineArrowUp, AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-router-dom";

import curriculo from "../../assets/documents/pedrogabriel-curriculo.pdf";

import "./buttons.scss";

export function RouterButton({ name, to }) {
    return (
        <Link className="router-button" to={to}>
            {name}
        </Link>
    )
}
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
    )
}
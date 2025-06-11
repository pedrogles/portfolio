import { Link } from "react-router-dom";

import "./routerbutton.scss";

export function RouterButton({ children, className = '', ...rest }) {
    return (
        <Link className={`router-button ${className}`} {...rest} >
            {children}
        </Link>
    );
};
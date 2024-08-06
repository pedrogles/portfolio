import { Link } from "react-router-dom";

import "./routerbutton.scss";

export function RouterButton({ children, to }) {
    return (
        <Link className="router-button" to={to}>
            {children}
        </Link>
    )
}
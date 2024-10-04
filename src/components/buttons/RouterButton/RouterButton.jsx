import { Link } from "react-router-dom";

import "./routerbutton.scss";

export function RouterButton({ name, to }) {
    return (
        <Link className="router-button" to={to}>
            {name}
        </Link>
    );
};
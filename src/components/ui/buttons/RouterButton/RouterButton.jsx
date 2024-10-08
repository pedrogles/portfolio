import { Link } from "react-router-dom";

import "./routerbutton.scss";

export function RouterButton({ name, to, onClick }) {
    return (
        <Link className="router-button" to={to} onClick={onClick}>
            {name}
        </Link>
    );
};
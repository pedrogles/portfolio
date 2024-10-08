import './listitem.scss';

export function ListItem({ title, subtitle, paragraph }) {
    return (
        <li className="item" >
            <h4 className="item-title">{title}</h4>
            <p className="item-paragraph">{paragraph}</p>
            <h5 className="item-subtitle">{subtitle}</h5>
        </li>
    );
};
import './listitem.scss';

export function ListItem({ title, subtitle, paragraph }) {
    return (
        <li>
            <div className="item">
                <h4 className="item-title">{title}</h4>
                <h5 className="item-subtitle">{subtitle}</h5>
                <p className="item-paragraph">{paragraph}</p>
            </div>
        </li>
    );
};
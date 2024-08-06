import { H4 } from "../texts";
import './sectionlist.scss';

export default function SectionList({ id, title, paragraph, subtitle }) {
    return (
        <li className="item"  id={id}>
            <H4>{title}</H4>
            <h5 className="item-subtitle">{subtitle}</h5>
            <p className="item-paragraph">{paragraph}</p>
        </li>
    )
}
import { user, aboutme } from '../../../../mocks/data';
import { Section } from '../../../../components';
import { User } from '../';

import './aboutme.scss';

export function AboutMe() {
    return (
        <Section>
            <User 
                name={user.name} 
                image={user.image} 
                alt={user.altimage} 
                profession={user.profession}
            />
            {aboutme.map((paragraph, key) => {
                return (
                    <p key={key} className="about-paragraph">{paragraph}</p>
                )
            })}
        </Section>
    );
};
import { useState } from 'react';
import { Skeleton } from '../../../../components/ui/Skeleton/Skeleton';
import './project.scss';

export function Project({ project }) {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <>
            {isLoading && <Skeleton width="100%" height="10rem" />}
            <li className="project-item" style={{ display: isLoading ? 'none' : 'flex'}}>
                <img 
                    className="project-image" 
                    src={ project.img }
                    alt={ project.alt }
                    onLoad={() => setIsLoading(false)} 
                    onError={() => setIsLoading(false)} /> 
                <div className="project-content">
                    <h4 className="project-title">{ project.title }</h4>
                    <p className="project-paragraph">{ project.paragraph }</p>
                    <a 
                        className="project-a" 
                        href={ project.link } 
                        aria-label={ project.ariaLabel } 
                        target="_blank" 
                        rel="noopener noreferrer">
                            { project.text }
                    </a>
                </div>
            </li>
        </>
    );
};
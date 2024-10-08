import './user.scss';

export function User({ image, alt, name, profession }) {
    return (
        <div id="user">
            <img className="user-image" src={image} alt={alt}/>
            <h2 className="user-name">{name}</h2>
            <p className="user-profession">{profession}</p>
        </div>
    );
};
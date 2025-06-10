import photo from "../../../../assets/image/pedro.png";

import './profilecard.scss';

export function ProfileCard() {
    const data = {
        name: "Pedro Gabriel Lima e Silva",
        profession: "Desenvolvedor Front-end e Web Designer",
        image: photo,
        altimage: "Foto de perfil de Pedro Gabriel com barba, bigode, óculos e sorriso sutil, em formato oval com fundo preto.",
    };
    return (
        <div id="profileCard">
            <img className="card-image" src={data.image} alt={data.alt}/>
            <h2 className="card-name">{data.name}</h2>
            <p className="card-profession">{data.profession}</p>
        </div>
    );
};
import { useState } from "react";
import photo from "../../../../assets/image/pedro.png";

import './profilecard.scss';
import { Skeleton } from "../../../../components";

export function ProfileCard() {
    const [isLoading, setIsLoading] = useState(true);
    const data = {
        name: "Pedro Gabriel Lima e Silva",
        profession: "Desenvolvedor Front-end e Web Designer",
        image: photo,
        altimage: "Foto de perfil de Pedro Gabriel com barba, bigode, óculos e sorriso sutil, em formato oval com fundo preto.",
    };
    return (
        <div id="profileCard">
            {isLoading && <Skeleton customClass="card-image" rounded={true} />}
            <img 
                className="card-image" 
                src={data.image} 
                alt={data.alt}
                style={{ display: isLoading ? 'none' : 'block' }}
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
            />
            <h2 className="card-name">{data.name}</h2>
            <p className="card-profession">{data.profession}</p>
        </div>
    );
};
import '../../style/cards/cards.scss';
import GovPB from '../../assets/works/govpb.jpeg';
import LiftersShop from '../../assets/works/liftershop.jpeg';
import LinkTree from '../../assets/works/LinkTree.jpg';

function Card(){
    return (
        <>
            <div id="card">
                <div className='card-elements'>
                    <figure>
                        <img src={LiftersShop} 
                        alt="Projeto Lifters Shop." />
                        <figcaption>Lifters Shop</figcaption>
                    </figure>
                    <span className='card-link'>
                        <a href='https://liftershop.herokuapp.com/' target='_blank' rel='noreferrer'>Visit here.</a>
                    </span>
                </div>
                <div className='card-elements'>
                    <figure>
                        <img src={GovPB}
                        alt="Projeto Governo da Paraíba." />
                        <figcaption>Register GovPB</figcaption>
                    </figure>
                    <span className='card-link'>
                        <a href='https://registergovpb.herokuapp.com/' target='_blank' rel='noreferrer'>Visit here.</a>
                    </span>
                </div>
                <div className='card-elements'>
                    <figure>
                        <img src={LinkTree}
                        alt="Projeto Arvore de Links." />
                        <figcaption>LinkTree</figcaption>
                    </figure>
                    <span className='card-link'>
                        <a href="https://pedrogles.github.io/LinkTree/" target='_blank' rel='noreferrer'>Visit here.</a>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Card;
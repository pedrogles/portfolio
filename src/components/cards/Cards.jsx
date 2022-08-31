import '../../style/cards/cards.scss';
import GovPB from '../../assets/img/works/govpb.jpeg';
import LiftersShop from '../../assets/img/works/liftershop.jpeg';
import LinkTree from '../../assets/img/works/LinkTree.jpeg';

function Card(){
    return (
        <>
            <div id="card">
                <h2>Projects</h2>
                <div className='card-elements'>
                    <img src={LiftersShop} 
                    alt="Projeto Lifters Shop." />
                    <h2>Lifters Shop</h2>
                    <span className='card-link'>
                        <a href='https://liftershop.herokuapp.com/' target='_blank' rel='noreferrer'>Visit here.</a>
                    </span>
                </div>
                <div className='card-elements'>
                    <img src={GovPB}
                    alt="Projeto Governo da Paraíba." />
                    <h2>Register GovPB</h2>
                    <span className='card-link'>
                        <a href='https://registergovpb.herokuapp.com/' target='_blank' rel='noreferrer'>Visit here.</a>
                    </span>
                </div>
                <div className='card-elements'>
                    <img src={LinkTree}
                    alt="Projeto Arvore de Links." />
                    <h2>LinkTree</h2>
                    <span className='card-link'>
                        <a href="https://pedrogles.github.io/LinkTree/" target='_blank' rel='noreferrer'>Visit here.</a>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Card;
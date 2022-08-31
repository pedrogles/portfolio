import '../../style/carousel/carousel.scss';
import Carousell from 'react-elastic-carousel';
import GovPB from '../../assets/img/works/govpb.jpeg';
import LiftersShop from '../../assets/img/works/liftershop.jpeg';
import LinkTree from '../../assets/img/works/LinkTree.jpeg';

function Carousel(){
    return (
        <>
            <div id="carousel">
                <Carousell className='container-carousel' infiniteloop autoPlay>
                    <div className='carousel-elements'>
                        <img src={LiftersShop} 
                        alt="Projeto Lifters Shop." />
                        <h2>Lifters Shop</h2>
                        <span className='carousel-link'>
                            <a href='https://liftershop.herokuapp.com/' target='_blank' rel='noreferrer'>Visite aqui.</a>
                        </span>
                    </div>
                    <div className='carousel-elements'>
                        <img src={GovPB}
                        alt="Projeto Governo da Paraíba." />
                        <h2>Register GovPB</h2>
                        <span className='carousel-link'>
                            <a href='https://registergovpb.herokuapp.com/' target='_blank' rel='noreferrer'>Visite aqui.</a>
                        </span>
                    </div>
                    <div className='carousel-elements'>
                        <img src={LinkTree}
                        alt="Projeto Arvore de Links." />
                        <h2>LinkTree</h2>
                        <span className='carousel-link'>
                            <a href="https://pedrogles.github.io/LinkTree/" target='_blank' rel='noreferrer'>Visite aqui.</a>
                        </span>
                    </div>
                </Carousell>
            </div>
        </>
    )
}

export default Carousel;
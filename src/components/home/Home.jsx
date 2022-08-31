import '../../style/home/home.scss'
import logo from '../../assets/logos/isologo.png';

function Home(){
    return (
        <div id="home">
            <div className='container-elements'>
                <div className='home-logo'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='home-elements'>
                    <h2>Hi, I'm Pedro Gabriel.</h2>
                </div>
                <div className='home-elements'>
                    <h3>Front-end Developer and technology enthusiast, always looking for new challenges.</h3>
                </div>
                <div className='home-elements'>
                    <div className='btn-container'>
                        <button className='btn'>
                            <a href="#works">Works</a>
                        </button>
                    </div>
                    <div className='btn-container'>
                        <button className='btn'>
                        <a href="#contact">Contact</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
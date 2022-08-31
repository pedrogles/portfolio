import '../../style/navbar/navbar.scss';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import logo from '../../assets/img/logos/isologo.png';

function Navbar(){
    return(
        <div id="navbar">
            <div className='navbar-itens'>
                <img src={logo} alt="Isologo" />
                <h1>
                    Front end Developer
                </h1>
            </div>
            <div className='navbar-itens'>
                <ul>
                    <li>
                        <a href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#works">
                            Works
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <div className='navbar-itens'>
                <ul className='navbar-icons-container'>
                    <li>
                        <a 
                        href="https://github.com/pedrogles"
                        target="_blank"
                        rel="noreferrer">
                            <AiFillGithub className='navbar-icons' />
                        </a>
                    </li>
                    <li>
                        <a 
                        href="https://www.linkedin.com/in/pedrogles/"
                        target='_blank'
                        rel="noreferrer">
                            <AiFillLinkedin className='navbar-icons' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
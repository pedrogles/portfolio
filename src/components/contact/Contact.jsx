import '../../style/contact/contact.scss';
import logo from '../../assets/logos/Logo-Pedro-Gabriel-2.png';
import { AiOutlineMail, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

function Contact(){
    return(
        <div id="contact">
            <div className='contact-elements'>
                <div className='contact-contact'>
                    <h2>
                        Living and learning. Whatever is good for your soul, do that.
                    </h2>
                    <div className='contact-icons'>
                        <a href='mailto: pedrogabriellima@gmail.com' alt="E-mail do Pedro" target="_blank" rel="noreferrer">
                            <AiOutlineMail className='icons' />
                        </a>
                        <a href='https://www.instagram.com/pedrogles_/' alt="Instagram do Pedro" target="_blank" rel="noreferrer">
                            <AiOutlineInstagram className='icons' />
                        </a>
                        <a href='https://www.linkedin.com/in/pedrogles/' alt="LinkedIn do Pedro" target="_blank" rel="noreferrer">
                            <AiOutlineLinkedin className='icons' />
                        </a>
                    </div>
                    <div className='back-home'>
                        <a href="#home" alt="Volte para o inicio.">Back to Home.</a>
                    </div>
                </div>
                <div className='contact-footer'>
                    <img src={logo} alt="Logotipo" />
                    <p>
                        Design e Development.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact
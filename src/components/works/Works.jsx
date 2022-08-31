import '../../style/works/works.scss';
import Cards from '../cards/Cards';

function Works() {
    return (
        <div id="works">
            <div className='works-elements'>
                <div className='works-card'>
                    <Cards className='card' />
                </div>
            </div>
        </div>
    )
}

export default Works
import { Link } from 'react-router-dom';
import './Buttons.scss'

const Buttons = () => {
    return (
        <div className='btn__wrapper'>
            <Link className='btn__individual' to={`/`}><button className='btn'>Home</button></Link>
            <Link className='btn__individual' to={`/compliments`}><button className='btn'>Compliments</button></Link>
            <Link className='btn__individual' to={`/thevoid`}><button className='btn'>The Void</button></Link>
        </div>
    );
}

export default Buttons;
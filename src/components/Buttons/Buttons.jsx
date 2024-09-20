import { Link } from 'react-router-dom';
import './Buttons.scss'

const Buttons = () => {
    return (
        <div className='btn__wrapper'>
            <Link to={`/`}><button className='btn'>Home</button></Link>
            <Link to={`/compliments`}><button className='btn'>Compliments</button></Link>
            <Link to={`/thevoid`}><button className='btn'>The Void</button></Link>
        </div>
    );
}

export default Buttons;
import { Link } from 'react-router-dom';
import './Buttons.scss'

const Buttons = () => {
    return (
        <div>
            <Link to={`/`}><button>Home</button></Link>
            <Link to={`/compliments`}><button>Compliments</button></Link>
            <Link to={`/thevoid`}><button>The Void</button></Link>
        </div>
    );
}

export default Buttons;
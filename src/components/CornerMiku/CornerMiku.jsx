import idleMiku from '../../assets/images/sketches/idlemiku.png';
import activeMiku from '../../assets/images/sketches/pointingmiku.png';
import './CornerMiku.scss';

//trying to add onclick function so the miku image changes when u click her.. but it breaks the other buttons.. actually having miku in the corner in general breaks the other buttons aaaaaaaaaa
function changeMikus(){
    const displayMiku = document.getElementById('miku-1')
    if(displayMiku.src.match('../../assets/images/sketches/idlemiku.png')) {
        displayMiku.src = '../../assets/images/sketches/pointingmiku.png'
    } else {
        displayMiku.src = '../../assets/images/sketches/idlemiku.png'
    }
}

function CornerMiku() {
    return (
        <div className='miku__wrapper'>
            <img id='miku-1' className='miku' src={idleMiku} alt="" />
        </div>
    )
}

export default CornerMiku;
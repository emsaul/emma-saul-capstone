import { useState } from "react";
import axios from "axios";
import './Compliments.scss';

export const NewCompliments = ()=> {
    const [compliment, setCompliments] = useState('');
    const handleFormSubmit = async(event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost5050/compliments`, {
                compliment
            });
            if (response) {
                console.log('Comment posted:', response.data);
                setCompliments('');
            }
        }catch(error) {
            console.error('Error posting compliment, sorry...', error);
        }
    };

  return (
    <>
        <form className="compliment-form" onSubmit={handleFormSubmit}>
            <div className="compliment-form__wrapper">
                <label htmlFor="">Leave a compliment :3</label>
                <input className="compliment-form__input" type="textarea" placeholder="Leave a compliment here please!" />
            </div>
            <button className="compliment__btn" type="submit">Compliment!</button>
        </form>
    </>
  );
};

export default NewCompliments;
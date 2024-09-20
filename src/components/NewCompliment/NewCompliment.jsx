import { useState } from "react";
import axios from "axios";
import './NewCompliment.scss';

export const NewCompliments = ({getCompliments})=> {
    // const [compliment, setCompliments] = useState('');
    const handleFormSubmit = async(event) => {
        event.preventDefault();
        console.log(event.target)
        try {
            const response = await axios.post(`http://localhost:5050/compliments`, {
                compliment:event.target.compliment.value
            });
            if (response) {
                console.log('Comment posted:', response.data);
                getCompliments();
            }
        }catch(error) {
            console.error('Error posting compliment, sorry...', error);
        }
    };

  return (
    <>
        <form className="compliment-form" onSubmit={handleFormSubmit}>
            <div className="compliment-form__wrapper">
                <label className="compliment-form__label" htmlFor="">Leave a compliment :3</label>
                <input className="compliment-form__input" type="textarea" name="compliment" placeholder="Leave a compliment here please!" />
            </div>
            <button className="compliment__btn" type="submit">Compliment!</button>
        </form>
    </>
  );
};

export default NewCompliments;
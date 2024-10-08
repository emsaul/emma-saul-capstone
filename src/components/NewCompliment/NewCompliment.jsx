import { useState } from "react";
import axios from "axios";
import './NewCompliment.scss';

export const NewCompliments = ({getCompliments})=> {
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
                <input className="compliment-form__input" type="textarea" name="compliment" placeholder="Leave a compliment here please!" />
            </div>
            <button className="compliment-form__btn" type="submit">Compliment!</button>
        </form>
    </>
  );
};

export default NewCompliments;
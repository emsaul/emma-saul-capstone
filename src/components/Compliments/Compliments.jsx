import { useState, useEffect } from "react";
import axios from "axios";
import NewCompliments from "../NewCompliment/NewCompliment";
import './Compliments.scss';

function Compliments() {
  const [compliments, setCompliments] = useState([]);

  useEffect(() => {
    const getCompliments = async () => {
      const response = await axios.get(`http://localhost:5050/compliments`);
      console.log(response);
      setCompliments(response.data);
    };
    getCompliments();
  }, []);

  return (
    <>
        <header>
            <h1>Leave a Compliment for Miku!</h1>
            <h3>Please only leave compliments here!!!</h3>
        </header>
        <NewCompliments />
        <ul className="compliment__list">
            {compliments.map((compliment) => (
            <li className="compliment" key={compliment.id}>
                <p className="compliment__body">{compliment.compliment}</p>
            </li>
            ))}
        </ul>
    </>
  );
}

export default Compliments;
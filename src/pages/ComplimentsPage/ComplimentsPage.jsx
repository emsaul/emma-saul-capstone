import { useState, useEffect } from "react";
import axios from "axios";
import NewCompliments from "../../components/NewCompliment/NewCompliment";
import './ComplimentsPage.scss';

function Compliments() {
  const [compliments, setCompliments] = useState([]);
const getCompliments = async () => {
      const response = await axios.get(`http://localhost:5050/compliments`);
      console.log(response);
      setCompliments(response.data);
    };
  useEffect(() => {
    getCompliments();
  }, []);

  return (
    <>
        <header>
            <h1 className="page-header__title">Leave a Compliment for Miku!</h1>
        </header>
        <NewCompliments getCompliments={getCompliments} />
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
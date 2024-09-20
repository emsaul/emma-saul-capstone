import { useState, useEffect } from "react";
import axios from "axios";

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
      <p>woa!! the compliments page so pretty</p>
      <ul>
        {compliments.map((compliment) => (
          <li key={compliment.id}>
            <p>{compliment.compliment}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Compliments;
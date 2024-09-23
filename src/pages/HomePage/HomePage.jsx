import { useState } from "react";
import './HomePage.scss';

function Home() {
  const [playerIdle, setPlayerIdle] = useState(true);
  const [trackIds, setTrackIds] = useState([
    "5ic62hKqeDhZsa9l6YQxzJ",
    "63yoRZd5zl6Ah30hfDm97k",
    "1ny0kgUklOy5FUigvWWK0q",
    "7aux5UvnlBDYlrlwoczifW",
    "7bjDEKwjlV8e5jdDts4a9o",
    "1jvRRj23Uwk5hr0UcCVn5V",
    "7vowTD5xDgYuBSEm242RAL",
    "4tzocptpoYkNibDpEPxLhr"
  ]);
  const [currentTrackId, setCurrentTrackId] = useState(trackIds[0]);

  return (
    <>
      {playerIdle ? (
        <div className="player-button__wrapper"><button className="player-button" onClick={() => setPlayerIdle(false)}>Start!</button></div>
      ) : (
        <div className="page-wrapper">
          <div className="spotify__wrapper">
            <iframe
            className="spotify-iframe"
            src={`https://open.spotify.com/embed/track/${currentTrackId}?utm_source=generator`}
            width="100%"
            height="300"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          </div>
          
          <div className="tracks__wrapper">
            <button className="tracks__individual" onClick={() => setCurrentTrackId(trackIds[0])}>
            Track 1
            </button>
            <button className="tracks__individual" onClick={() => setCurrentTrackId(trackIds[1])}>
            Track 2
            </button>
            <button className="tracks__individual" onClick={() => setCurrentTrackId(trackIds[2])}>
            Track 3
            </button>
            <button className="tracks__individual" onClick={() => setCurrentTrackId(trackIds[3])}>
            Track 4
            </button>
            <button className="tracks__individual" onClick={() => setCurrentTrackId(trackIds[4])}>
            Track 5
            </button>
            <button className="tracks__individual" onClick={() => setCurrentTrackId(trackIds[5])}>
            Track 6
            </button>
            <button className="tracks__individual" onClick={() => setCurrentTrackId(trackIds[6])}>
            Track 7
            </button>
            <button className="tracks__individual" onClick={() => setCurrentTrackId(trackIds[7])}>
            Track 8
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;

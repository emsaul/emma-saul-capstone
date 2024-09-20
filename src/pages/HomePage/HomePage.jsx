import { useState } from "react";
import './HomePage.scss';

function Home() {
  const [playerIdle, setPlayerIdle] = useState(true);
  const [trackIds, setTrackIds] = useState([
    "5ic62hKqeDhZsa9l6YQxzJ",
    "63yoRZd5zl6Ah30hfDm97k"
  ]);
  const [currentTrackId, setCurrentTrackId] = useState(trackIds[0]);

  return (
    <>
      {playerIdle ? (
        <button onClick={() => setPlayerIdle(false)}>Start Player</button>
      ) : (
        <div>
          <iframe
            className="spotify-iframe"
            src={`https://open.spotify.com/embed/track/${currentTrackId}?utm_source=generator`}
            width="100%"
            height="300"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

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
            <button className="tracks__individual" onClick={() => setCurrentTrackId(trackIds[2])}>
            Track 3
            </button>
            <button className="tracks__individual" onClick={() => setCurrentTrackId(trackIds[2])}>
            Track 3
            </button>
            <button className="tracks__individual" onClick={() => setCurrentTrackId(trackIds[2])}>
            Track 3
            </button>
            <button className="tracks__individual" onClick={() => setCurrentTrackId(trackIds[2])}>
            Track 3
            </button>
            <button className="tracks__individual" onClick={() => setCurrentTrackId(trackIds[2])}>
            Track 3
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;

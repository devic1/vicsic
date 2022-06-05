import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";

function Cardrender() {
  let getSongs = async () => {
    let sl = await fetch("http://127.0.0.1:8000/api/songs/");
    let sld = await sl.json();
    setsli(sld);
  };
  useEffect(() => {
    getSongs();
  }, []);
  const [sli, setsli] = useState([]);
  return (
    <div className="flex flex-wrap justify-center ">
      {sli.map((son) => {
        return (
          <Card
            key={son.id}
            SongName={son.song_name}
            ArtistName={son.artist_name}
            SongImage={son.song_image}
            PreviewUrl={son.pr_url}
          />
        );
      })}
    </div>
  );
}

export default Cardrender;

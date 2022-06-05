import React from "react";

function Card(props) {
  return (
    <div>
      <p className="text-white " id="list"></p>
      <div className="flex-wrap justify-center ">
        <div
          id="cardbg"
          className="bg-sky-900  ml-3 mr-3 mt-8 w-48 rounded-lg shadow-2xl"
        >
          <img
            className="inline-block w-40 h-40 rounded-2xl mt-2 ml-3 justify-center"
            src={props.SongImage}
            alt="Song"
          />

          <p className="ml-2 mt-2 font-mono font-light text-indigo-100 overflow-hidden">
            {props.ArtistName}
            <br></br>
            <span className="font-bold text-indigo-50 truncate">
              {props.SongName}
            </span>
          </p>

          <audio controls className="h-10 w-44 justify-center ml-2 mt-1 pb-2 ">
            <source src={props.PreviewUrl} type="audio/ogg" />
            <source src={props.PreviewUrl} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
}

export default Card;

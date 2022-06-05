import React from "react";

function Playlist() {
  return (
    <div className="bg-gradient-to-br from-green-700 to-pink-700 mt-7 -ml-4 mr-4 w-40 h-40 rounded-lg shadow-2xl">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-11 pt-11 ml-12"
          fill="white"
          viewBox="0 0 24 24"
          stroke="black"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
        <p className="text-white pl-8 pt-2">Playlist Songs</p>
      </div>
    </div>
  );
}

export default Playlist;

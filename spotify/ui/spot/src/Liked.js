import React from "react";

function Liked() {
  return (
    <div className="bg-gradient-to-br from-green-700 to-pink-700 mt-7 -ml-4 mr-4 w-40 h-40 rounded-lg shadow-2xl">
      <div>
        <svg
          className="w-12 pt-11 ml-12"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          stroke="black"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <p className="text-white pl-8 pt-2">Liked Songs</p>
      </div>
    </div>
  );
}

export default Liked;

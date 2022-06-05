import React from "react";

function Suggested() {
  return (
    <div className="bg-gradient-to-br from-green-700 to-pink-700 mt-7 -ml-4 mr-4 w-40 h-40 rounded-lg shadow-2xl">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 pt-11 ml-12"
          fill="white"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
        <p className="text-white pl-8 pt-2">Recommended</p>
      </div>
    </div>
  );
}

export default Suggested;

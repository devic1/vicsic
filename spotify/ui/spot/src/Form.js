import React, { useState } from "react";

function Form() {
  const [ssl, setssl] = useState([]);
  function change(e) {
    let val = e.target.value;
    if (val == "") {
      setssl([]);
    } else {
      if (val.length !== 0 && val.match(/[a-z]/i)) {
        let gt = async () => {
          let resp = await fetch("http://127.0.0.1:8000/api/search/" + val);
          let data = await resp.json();
          if (data[0] == null) {
            setssl([]);
          } else {
            setssl(data);
          }
        };
        gt();
      }
    }
  }
  var x = new Audio();
  function hov(props, sorc) {
    if (sorc !== "None") {
      if (props === 1) {
        x.src = sorc;
        x.play();
      } else {
        x.pause();
      }
    } else {
      console.log("Source Not Found");
    }
  }

  return (
    <div>
      <form
        id="form"
        action="{% url 'add' %}"
        method="post"
        className="relative -mt-6 ml-auto w-60  mr-4 "
      >
        <svg
          width="20"
          height="20"
          fill="white"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-200"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          id="search"
          autoComplete="off"
          name="song"
          onChange={change}
          className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-white placeholder-gray-200 rounded-md py-2 pl-10"
          type="text"
          aria-label="Search"
          placeholder="Search Songs"
        />
      </form>
      <div
        className="absolute inline-block right-0 w-23 mt-1 mr-2"
        id="autoitem"
      >
        {ssl.map((soli, index) => (
          <div
            id="autoitem"
            className="flex relative mt-4 mb-2 w-60  mr-4"
            key={index}
          >
            <div
              className="flex"
              onMouseEnter={() => {
                hov(1, soli[3]);
              }}
              onMouseLeave={() => {
                hov(0, soli[3]);
              }}
            >
              <img className="ml-2 w-10 h-10" src={soli[2]} alt={soli[1]} />
              <p className="ml-3 text-white truncate">{soli[0]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;

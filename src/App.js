import { useState } from "react";
import "./styles.css";

var places = {
  India: [
    {
      name: "Taj mahal",
      location: "Agra,Uttar Pradesh"
    },
    {
      name: "The golden Temple",
      location: "Amritsar, Punjab"
    },
    {
      name: "The Ellora Caves",
      location: "Ellora, Maharashtra"
    }
  ],
  Spain: [
    {
      name: "Guggenheim Musseum",
      location: " Bilbao"
    },
    {
      name: "The Alhambra and Generalife Gardens",
      location: " Granada"
    }
  ],
  France: [
    {
      name: "Eiffel Tower",
      location: "Paris"
    },
    {
      name: " Louvre Museum",
      location: "Paris"
    },
    {
      name: "Palace of Versailles",
      location: "Versailles"
    }
  ]
};

var placeslist = Object.keys(places);

export default function App() {
  var [country, setCountry] = useState("India");

  function onClickhandler(item) {
    setCountry(item);
  }

  return (
    <div className="App">
      <h1> ✈️ Travel Recommendation </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout some of my favourate Exitng Travel destination
      </p>

      <div>
        {placeslist.map((item) => (
          <button
            key={item}
            onClick={() => onClickhandler(item)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {places[country].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{place.name}</div>
              <div style={{ fontSize: "smaller" }}>{place.location}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

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
      <h1>Travel Recommendation </h1>
      <div>text</div>
      <div>
        {placeslist.map((item) => (
          <button key={item} onClick={() => onClickhandler(item)}>
            {item}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul style={{ listStyle: "none" }}>
          {places[country].map((place) => (
            <li key={place.name}>
              <div>{place.name}</div>
              <div>{place.location}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

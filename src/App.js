import { useState } from "react";
import "./styles.css";

var places = {
  India: [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG",
      name: "Taj mahal",
      location: "Agra,Uttar Pradesh"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Golden_Temple%2C_Amritsar_03.jpg",
      name: "The golden Temple",
      location: "Amritsar, Punjab"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/27/Kailash_Temple_%28Cave_16%29_in_Ellora_Caves.jpg",
      name: "The Ellora Caves",
      location: "Ellora, Maharashtra"
    }
  ],
  Spain: [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b7/Museo_Guggenheim_Bilbao._Zona_norte.jpg",
      name: "Guggenheim Musseum",
      location: " Bilbao"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/57/Generalife-Alhambra-3.jpg",
      name: "The Alhambra and Generalife Gardens",
      location: " Granada"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/26/%CE%A3%CE%B1%CE%B3%CF%81%CE%AC%CE%B4%CE%B1_%CE%A6%CE%B1%CE%BC%CE%AF%CE%BB%CE%B9%CE%B1_2941.jpg",
      name: "La Sagrada Familia",
      location: " Barcelona"
    }
  ],
  France: [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg",
      name: "Eiffel Tower",
      location: "Paris"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/53/Le_Louvre_-_Aile_Richelieu.jpg",
      name: " Louvre Museum",
      location: "Paris"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/17/Vue_a%C3%A9rienne_du_domaine_de_Versailles_le_20_ao%C3%BBt_2014_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_29.jpg",
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

      <ul>
        {places[country].map((place) => (
          <div>
            {" "}
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
              <img
                style={{
                  width: "90%",
                  borderRadius: "20px",
                  margin: "auto",
                  maxWidth: "120px",
                  marginRight: "0rem",
                  marginLeft: "0rem"
                }}
                src={place.image}
              />

              <div>
                {" "}
                <p style={{ fontSize: "larger" }}>{place.name}</p>
                <p style={{ fontSize: "smaller" }}>{place.location}</p>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

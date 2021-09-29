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

export default function App() {
  return (
    <div className="App">
      <h1>Travel Recommendation </h1>
    </div>
  );
}

import { useState,useEffect } from 'react';
import './App.css';
import StarShipCard from "./components/StarShipCard";
import { getAllStarships } from "./services/sw-api";


function App() {   
  const [starships,SetStarships] = useState([]);
  
  useEffect(() => {
    // Fetch starships from API and update state
    getAllStarships().then((data) => SetStarships(data));
  }, []);

  return (
    <div className="App">
    <h1>STAR WARS STARSHIPS</h1>
    <div className="CardContainer">
        {starships.map((starship) => (
          <StarShipCard key={starship.name} name={starship.name} />
        ))}
      </div>
    </div>
  );
}

export default App;

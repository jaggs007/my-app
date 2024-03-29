import React from "react";
import WindSpeedDirectionGraph from "./components/WIndSpeedDirectionGraph";
import WindDirectionSpeedGraph from "./components/WindDirectionSpeedGraph";

const App = () => {
  // Sample wind data
  const windData = [
    { speed: 10, direction: 45 },
    { speed: 15, direction: 90 },
    // Add more wind data as needed
  ];

  return (
    <div>
      <h1>Wind Speed and Direction Graph</h1>
      <WindSpeedDirectionGraph />
      <WindDirectionSpeedGraph />
    </div>
  );
};

export default App;

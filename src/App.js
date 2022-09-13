import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={apikey}`;
  const searchLocation = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      setLocation('');
    }).catch((err) => {
        console.log('Error');
      });
  };
  const kelvinConvertor = (input) => {
    let fahrenheit = ((input - 273.15) * 9) / 5 + 32;
    let fahrenheit1 = Math.floor(fahrenheit);
    return fahrenheit1;
  };
  return (
    <div className="app">
      <h1 id="head">Weather</h1>
      <div className="input">
        <input
          id="input"
          type="text"
          placeholder="Enter a city, state or country"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <button onClick={searchLocation}>Enter</button>
      </div>
      <div className="display">
        <div className="header">
          <h1>{data.name}</h1>
        </div>
        <div className="data">
          {data.main ? <h1>{kelvinConvertor(data.main.temp)}°F</h1> : null}
          {data.weather ? <h1>{data.weather[0].main}</h1> : null}
          {data.main ? <h1>{data.main.humidity}%</h1> : null}
        </div>
        <h2></h2>
      </div>
    </div>
  );
}

export default App;

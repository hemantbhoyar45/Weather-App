import { useState } from "react";
import Search from "./Search";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    feelsLike: 24.84,
    weather: "haze",
  });

  const update = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ marginLeft: "600px"}}>
      <h2>Weather App by Hemant</h2>
      <Search update={update} />
      <InfoBox Info={weatherInfo} />
    </div>
  );
}

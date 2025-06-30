import { useState } from "react";
import Search from "./Search";
import InfoBox from "./assets/InfoBox";

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
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Hemant</h2>
      <Search update={update} />
      <InfoBox Info={weatherInfo} />
    </div>
  );
}

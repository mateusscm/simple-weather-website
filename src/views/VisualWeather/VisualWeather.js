import React, { useState } from "react";
import { fetchWeather } from "../../api/fetchWeather";
import SearchToolbar from "../../components/SearchToolbar";
import Weather from "../../components/Weather";
import * as S from "./styles/VisualWeather.styles";

export default function VisualWeather() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState({});

  const searchText = (e) => {
    e.preventDefault();
    fetchWeather(city, country).then((res) => setWeather(res));
  };

  const handleInputSearchCity = (e) => {
    setCity(e.target.value);
  };

  const handleSelectSearchCountry = (e) => {
    setCountry(e.target.value);
  };

  return (
    <>
      <SearchToolbar
        searchText={searchText}
        city={city}
        country={country}
        handleSelectSearchCountry={handleSelectSearchCountry}
        handleInputSearchCity={handleInputSearchCity}
      />
      <S.WeatherContainer>
        <Weather weather={weather} />
      </S.WeatherContainer>
    </>
  );
}

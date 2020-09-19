import React, { useState } from "react";
import { fetchWeather } from "../../api/fetchWeather";
import MiniWeather from "../../components/MiniWeather/MiniWeather";
import SearchToolbar from "../../components/SearchToolbar";
import Weather from "../../components/Weather";
import * as S from "./styles/VisualWeather.styles";

export default function VisualWeather() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState({});
  const [stories, setStories] = useState([]);

  const searchText = (e) => {
    e.preventDefault();
    fetchWeather(city, country).then((res) => {
      setWeather(res);
      addStory({
        id: Math.floor(Math.random() * 10000),
        icon: res.weather[0].icon,
        place: res.name,
        region: res.sys.country,
      });
    });
  };

  const handleInputSearchCity = (e) => {
    setCity(e.target.value);
  };

  const handleSelectSearchCountry = (e) => {
    setCountry(e.target.value);
  };

  const addStory = (story) => {
    const newStories = [story, ...stories];

    setStories(newStories);
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
      {typeof weather.main != "undefined" ? (
        <S.WeatherContainer>
          <Weather weather={weather} />
          <S.ContainerMiniCards>
            {stories.map((storie) => (
              <MiniWeather storie={storie} key={storie.id} />
            ))}
          </S.ContainerMiniCards>
        </S.WeatherContainer>
      ) : (
        "Nada por aqui, por enquanto"
      )}
    </>
  );
}

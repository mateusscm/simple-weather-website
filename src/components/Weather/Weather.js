import React, { useState } from "react";
import * as S from "./styles/Weather.styles";
import { countries } from "./data/countries";
import { fetchWeather } from "../../api/fetchWeather";

export default function Weather() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState({});

  function minmaxTemp(min, max) {
    return (
      <h3 className="minmax">
        <span>{min}&deg;C</span>
        <span>{max}&deg;C</span>
      </h3>
    );
  }

  const searchText = (e) => {
    e.preventDefault();
    fetchWeather(city, country).then((res) => setWeather(res));
  };

  const dateBuilder = (d) => {
    let months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    let days = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} de ${month} de ${year}`;
  };

  return (
    <S.WeatherContainer>
      <S.FormSearch onSubmit={searchText} role="search">
        {/* <label for="search">Search for stuff</label> */}
        <input
          id="search"
          type="text"
          placeholder="Type a city..."
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <select
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select a country</option>
          {countries.map((c) => (
            <option value={c.value} key={Math.random()}>
              {c.label}
            </option>
          ))}
        </select>
        <button type="submit">Go</button>
      </S.FormSearch>
      {typeof weather.main != "undefined" ? (
        <S.CardWeather>
          <h3 className="date">{dateBuilder(new Date())}</h3>
          <hr className="divider" />
          <h1 className="title">
            {weather.name} <span>{weather.sys.country}</span>
          </h1>
          <h5 className="icon">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
          </h5>
          <h1 className="temp">{weather.main.temp}&deg;C</h1>
          <h5 className="feels">Feels Like: {weather.main.feels_like}</h5>
          {minmaxTemp(
            Math.round(weather.main.temp_min),
            Math.round(weather.main.temp_max)
          )}

          <h4 className="phrase">{weather.weather[0].main}</h4>
        </S.CardWeather>
      ) : (
        "Nada por aqui, por enquanto..."
      )}
    </S.WeatherContainer>
  );
}

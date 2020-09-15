import React, { useState } from "react";
import * as S from "./styles/Weather.styles";
import { WeatherSunny } from "@styled-icons/typicons";

const api = {
  key: "f76fa67450c00362e54689040cc5c05f",
  url: "https://api.openweathermap.org/data/2.5/",
};

export default function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  function minmaxTemp(min, max) {
    return (
      <h3>
        <span>{min}&deg;</span>
        <span>{max}&deg;</span>
      </h3>
    );
  }

  const searchText = (e) => {
    e.preventDefault();
    fetch(`${api.url}weather?q=${query}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
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
      <form onSubmit={searchText} role="search">
        {/* <label for="search">Search for stuff</label> */}
        <input
          id="search"
          type="text"
          placeholder="Search..."
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Go</button>
      </form>
      {typeof weather.main != "undefined" ? (
        <div>
          <h1>
            {weather.name}, {weather.sys.country}
          </h1>
          <h3>{dateBuilder(new Date())}</h3>
          <h5>
            <WeatherSunny />
          </h5>
          <h1>{Math.round(weather.main.temp)}&deg;C</h1>
          <h5>Feels Like: {weather.main.feels_like}</h5>
          {/**mostra valor maximo e minimo de temperatura */}
          {minmaxTemp(
            Math.round(weather.main.temp_min),
            Math.round(weather.main.temp_max)
          )}

          <h4>{weather.weather[0].main}</h4>
        </div>
      ) : (
        "Nada por aqui, por enquanto..."
      )}
    </S.WeatherContainer>
  );
}

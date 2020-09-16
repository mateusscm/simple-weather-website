import React, { useEffect, useState } from "react";
import * as S from "./styles/Weather.styles";
import { WeatherSunny } from "@styled-icons/typicons";
import { countries } from "./data/countries";

const api = {
  key: "1b8d4f60a0cb04f0aee84690827e48a2",
  url: "http://api.openweathermap.org/data/2.5/",
};

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

  // useEffect(() => {
  //   getData("São Carlos", "BR");
  // });

  const getData = (ci, co) => {
    console.log(`${api.url}weather?q=${ci},${co}&appid=${api.key}`);
    fetch(`${api.url}weather?q=${ci},${co}&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setCity("");
        setCountry("");
      })
      .catch((error) => console.log(error));
  };

  const searchText = (e) => {
    e.preventDefault();
    console.log(city, country);
    getData(city, country);
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
      <form onSubmit={searchText} role="search">
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
        {/* <input
          id="search"
          type="text"
          placeholder="Type a country..."
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        /> */}
        <button type="submit">Go</button>
      </form>
      {/* <S.CardWeather>
        <h5 className="date">Terça-feira, 20 de agosto de 2020</h5>
        <hr className="divider" />
        <h1 className="title">
          São Paulo <span>BR</span>
        </h1>
        <h5 className="icon">
          <WeatherSunny />
        </h5>
        <h1 className="temp">24&deg;C</h1>
        <h5 className="feels">Feels Like: 30&deg;C</h5>
        {minmaxTemp(Math.round(15), Math.round(33))}

        <h4 className="phrase">Calor da desgraça</h4>
      </S.CardWeather> */}
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

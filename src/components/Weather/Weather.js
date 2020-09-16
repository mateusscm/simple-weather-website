import React, { useState } from "react";
import * as S from "./styles/Weather.styles";
import { countries } from "./data/countries";
import d_01 from '../../assets/images/weather-icons/01d.png';
import n_01 from '../../assets/images/weather-icons/01n.png';
import d_02 from '../../assets/images/weather-icons/02d.png';
import n_02 from '../../assets/images/weather-icons/02n.png';
import _03 from '../../assets/images/weather-icons/03.png';
import _04 from '../../assets/images/weather-icons/04.png';
import _09 from '../../assets/images/weather-icons/09.png';
import n_10 from '../../assets/images/weather-icons/10n.png';
import d_10 from '../../assets/images/weather-icons/10d.png';
import n_11 from '../../assets/images/weather-icons/11n.png';
import d_11 from '../../assets/images/weather-icons/11d.png';
import _13 from '../../assets/images/weather-icons/13.png';
import _50 from '../../assets/images/weather-icons/50.png';

const api = {
  key: "f98e5394589b6b94a727042afd268652",
  url: "https://api.openweathermap.org/data/2.5/",
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
    fetch(`${api.url}weather?q=${ci},${co}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setCity("");
        setCountry("");
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  const searchText = (e) => {
    e.preventDefault();
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

  const verifyImage = (icon) => {
    switch (icon) {
      case "01d": 
        return d_01;
      case "01n": 
        return n_01;
      case "02d": 
        return d_02;
      case "02n": 
        return n_02;
      case "03d": 
        return _03;
      case "03n": 
        return _03;
      case "04d": 
        return _04;
      case "04n": 
        return _04;
      case "09d": 
        return _09;
      case "09n": 
        return _09;
      case "10d": 
        return d_10;
      case "10n": 
        return n_10;
      case "11d": 
        return d_11;
      case "11n": 
        return n_11;
      case "13n": 
        return _13;
      case "13d": 
        return _13;
      case "50d": 
        return _50;
      case "50n": 
        return _50;
      default: 
        return null;
        
    }
  }

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
              src={verifyImage(weather.weather[0].icon)}
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

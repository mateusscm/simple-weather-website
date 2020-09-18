import React from "react";
import * as S from "./styles/Weather.styles";
import d_01 from "../../assets/images/weather-icons/01d.png";
import n_01 from "../../assets/images/weather-icons/01n.png";
import d_02 from "../../assets/images/weather-icons/02d.png";
import n_02 from "../../assets/images/weather-icons/02n.png";
import _03 from "../../assets/images/weather-icons/03.png";
import _04 from "../../assets/images/weather-icons/04.png";
import _09 from "../../assets/images/weather-icons/09.png";
import n_10 from "../../assets/images/weather-icons/10n.png";
import d_10 from "../../assets/images/weather-icons/10d.png";
import n_11 from "../../assets/images/weather-icons/11n.png";
import d_11 from "../../assets/images/weather-icons/11d.png";
import _13 from "../../assets/images/weather-icons/13.png";
import _50 from "../../assets/images/weather-icons/50.png";

export default function Weather({ weather }) {
  function minmaxTemp(min, max) {
    return (
      <h3 className="minmax">
        <span>{min}&deg;C</span>
        <span>{max}&deg;C</span>
      </h3>
    );
  }

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
  };

  return typeof weather.main != "undefined" ? (
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
  );
}

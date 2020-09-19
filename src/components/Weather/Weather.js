import React from "react";
import * as S from "./styles/Weather.styles";
import { dateBuilder, verifyImage } from "../../utils/functions";

export default function Weather({ weather }) {
  function minmaxTemp(min, max) {
    return (
      <h3 className="minmax">
        <span>{min}&deg;C</span>
        <span>{max}&deg;C</span>
      </h3>
    );
  }

  return (
    <S.CardWeather temp={weather.main.temp}>
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
      <h1 className="temp">{Math.round(weather.main.temp)}&deg;C</h1>
      <h5 className="feels">Feels Like: {weather.main.feels_like}</h5>
      {minmaxTemp(
        Math.round(weather.main.temp_min),
        Math.round(weather.main.temp_max)
      )}

      <h4 className="phrase">{weather.weather[0].main}</h4>
    </S.CardWeather>
  );
}

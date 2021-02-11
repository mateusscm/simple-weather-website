import React from "react";
import * as S from "./styles/Weather.styles";
import { dateBuilder, verifyImage } from "../../utils/functions";
import { MapMarkerAlt } from "@styled-icons/fa-solid";
import { motion } from "framer-motion";

export default function Weather({ weather }) {
  function minmaxTemp(min, max) {
    return (
      <h3 className="minmax">
        <span>{min}&deg;C/</span>
        <span>{max}&deg;C</span>
      </h3>
    );
  }

  return (
    <S.CardWeather 
      temp={weather.main.temp}
      as={motion.section}
      transition={{ delay: 0, duration: 0.5 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >
      <h3 className="date">{dateBuilder(new Date())}</h3>
      <hr className="divider" />
      <h1 className="title">
        <MapMarkerAlt />
        <span className="city">{weather.name}</span>{" "}
        <span className="country">{weather.sys.country}</span>
      </h1>
      <h5 className="icon">
        <img
          className="city-icon"
          src={verifyImage(weather.weather[0].icon)}
          alt={weather.weather[0].description}
        />
        <h4 className="phrase">{weather.weather[0].main}</h4>
      </h5>
      <h1 className="temp">{Math.round(weather.main.temp)}&deg;C</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          alignItems: "center",
          margin: "8px 0px",
          padding: "5px 0px",
          backgroundColor: "rgba(255, 255, 255,0.5)",
          borderRadius: 5,
        }}
      >
        {minmaxTemp(
          Math.round(weather.main.temp_min),
          Math.round(weather.main.temp_max)
        )}
        <h5 className="feels">
          Feels Like: <b>{Math.round(weather.main.feels_like)}&deg;C</b>
        </h5>
      </div>
    </S.CardWeather>
  );
}

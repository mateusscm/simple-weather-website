import React from "react";
import * as S from "./styles/MiniWeather.styles";

export default function MiniWeather({ storie }) {
  return (
    <S.MiniCardWeather>
      <span>{storie.icon}</span>
      <span>{storie.place}</span>
      <span>{storie.region}</span>
    </S.MiniCardWeather>
  );
}

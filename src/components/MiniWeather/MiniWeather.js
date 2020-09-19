import React from "react";
import { verifyImage } from "../../utils/functions";
import * as S from "./styles/MiniWeather.styles";

export default function MiniWeather({ storie }) {
  return (
    <S.MiniCardWeather>
      <S.TitleStory>
        {storie.name} <span>{storie.sys.country}</span>
      </S.TitleStory>
      <S.IconStory
        src={verifyImage(storie.weather[0].icon)}
        alt={storie.weather[0].description}
      />
      <S.TempStory>{Math.round(storie.main.temp)}&deg;C</S.TempStory>
    </S.MiniCardWeather>
  );
}

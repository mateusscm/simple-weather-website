import React from "react";
import * as S from "./styles/Weather.styles";
import { WeatherSunny } from "@styled-icons/typicons";

export default function Weather() {
  function minmaxTemp(min, max) {
    return (
      <h3>
        <span>{min}&deg;</span>
        <span>{max}&deg;</span>
      </h3>
    );
  }

  return (
    <S.WeatherContainer>
      <div>
        <h1>Americana</h1>
        <h5>
          <WeatherSunny />
        </h5>
        <h1>25&deg;</h1>

        {/**mostra valor maximo e minimo de temperatura */}
        {minmaxTemp(24, 19)}

        <h4>Slow Rain</h4>
      </div>
    </S.WeatherContainer>
  );
}

import { motion } from "framer-motion";
import React from "react";
import { verifyImage } from "../../utils/functions";
import * as S from "./styles/MiniWeather.styles";

export default function MiniWeather({ storie }) {
  return (
    <S.MiniCardWeather 
      temp={storie.main.temp}
      as={motion.section}
      transition={{ delay: 0.5, duration: 0.5 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >
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

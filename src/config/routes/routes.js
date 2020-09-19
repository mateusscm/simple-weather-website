import React from "react";
import { HomeOutline, GlobeOutline } from "@styled-icons/typicons";
import Home from "../../views/Home/Home";
import VisualWeather from "../../views/VisualWeather/VisualWeather";

export const routes = [
  {
    path: "/home",
    component: Home,
    exact: true,
    icon: <HomeOutline />,
    alias: "Home",
  },
  {
    path: "/visual",
    component: VisualWeather,
    exact: true,
    icon: <GlobeOutline />,
    alias: "Visualization",
  },
];

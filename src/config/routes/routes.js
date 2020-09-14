import React from "react";
import { HomeOutline, GlobeOutline } from "@styled-icons/typicons";
import App from "../../views/App/App";
import VisualWeather from "../../views/VisualWeather/VisualWeather";

export const routes = [
  {
    path: "/home",
    component: App,
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

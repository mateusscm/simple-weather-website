import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "../../styles/global";
import VisualRoutes from "./VisualRoutes";
import { routes } from "../../config/routes/routes";
import HeaderNavigation from "./HeaderNavigation";

export default function Navigation() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <HeaderNavigation routes={routes} />
      <VisualRoutes routes={routes} />
    </BrowserRouter>
  );
}

import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import * as S from "./styles/HeaderNavigation.styles";

export default function HeaderNavigation({ routes }) {
  const history = useHistory();
  return (
    <S.NavHeader>
      <div
        onClick={() => history.push("/home")}
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <S.Logo alt="Logo" src={logo} />
        <h3 style={{ padding: "0px 10px" }}>Simple Weather App</h3>
      </div>
      <S.ContainerList>
        {routes?.map((route) => {
          return (
            <li>
              <S.NavItem to={route.path} key={Math.random()}>
                {route.alias}
                <div className="bar" />
              </S.NavItem>
            </li>
          );
        })}
      </S.ContainerList>
    </S.NavHeader>
  );
}

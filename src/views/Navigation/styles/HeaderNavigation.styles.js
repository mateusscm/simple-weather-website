import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  /* padding: 4px 16px; */
`;

export const Logo = styled.img`
  width: 2.3rem;
  height: 2.3rem;
`;

export const ContainerList = styled.ul`
  margin: 0px;
  display: flex;
  list-style: none;

  & > li {
    padding-left: 16px;
  }

  & > li,
  a {
    text-decoration: none;
    color: black;
  }

  a {
    font-weight: 500;
  }

  a:hover {
    font-weight: bold;
  }
`;

const activeClassName = "active";
export const NavItem = styled(NavLink).attrs({
  activeClassName,
})`
  position: relative;
  &.${activeClassName} {
    font-weight: bold;
    .bar {
      position: absolute;
      bottom: -13px;
      height: 7px;
      width: 100%;
      background-color: #e76f51;
    }
  }
`;

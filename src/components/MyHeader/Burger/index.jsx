import React from "react";
import { slide as Menu } from "react-burger-menu";
import { StyledBurgerMenu } from "./style";

export default function Burger() {
  return (
    <StyledBurgerMenu>
      <Menu left width={"180px"}>
        <a href="/">Agribray</a>

        <a href="/equipes">Equipes</a>

        <a href="/services">Services</a>

        <a href="/galerie">Galerie</a>

        <a href="/temoignage">Temoignages</a>

        <a href="/infos">infos</a>
      </Menu>
    </StyledBurgerMenu>
  );
}
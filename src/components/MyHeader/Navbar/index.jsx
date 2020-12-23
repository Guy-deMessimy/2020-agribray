import React from "react";
import { NavContainer, NavDropdown, DropdownItems } from "./style";

export default function Navbar() {
  return (
    <NavContainer>
      <nav>
        <NavDropdown>
          <a href="/">Qui Sommes Nous ?</a>
          <DropdownItems>
            <a href="/agribray">Agribray</a>
            <a href="/equipes">Equipes</a>
          </DropdownItems>
        </NavDropdown>
        
        <NavDropdown>
          <a href="/services">Services</a>
          <DropdownItems>
            <a href="/travaux">Travaux agricoles</a>
            <a href="/transports">Transports</a>
          </DropdownItems>
        </NavDropdown>

        <NavDropdown>
          <a href="/galeries">Galeries</a>
          <DropdownItems>
            <a href="/photos">Photos</a>
            <a href="/videos">Videos</a>
          </DropdownItems>
        </NavDropdown>

      <NavDropdown>
        <a href="/temoignages">Temoignages</a>
      </NavDropdown>

      <NavDropdown>
        <a href="/infos">Infos</a>
      </NavDropdown>

    </nav>
  </NavContainer>
  );
}
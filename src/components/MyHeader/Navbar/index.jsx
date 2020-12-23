import React from "react";
import { NavContainer, NavDropdown, DropdownItems } from "./style";

export default function Navbar() {
  return (
    <NavContainer>
      <nav>
        <NavDropdown>
          <a href="/">Qui Sommes Nous ?</a>
          <DropdownItems>
            <a href="/engagements">Agribray</a>
            <a href="/about">Equipes</a>
          </DropdownItems>
        </NavDropdown>
        |
        <NavDropdown>
          <a href="/actions">Services</a>
          <DropdownItems>
            <a href="/pedagogie">Travaux agricoles</a>
            <a href="/ateliers">Transports</a>
          </DropdownItems>
        </NavDropdown>

        <NavDropdown>
          <a href="/actions">Galeries</a>
          <DropdownItems>
            <a href="/pedagogie">Photos</a>
            <a href="/ateliers">Videos</a>
          </DropdownItems>
        </NavDropdown>

      <NavDropdown>
        <a href="/actualite">Temoignages</a>|
        <a href="/contact">Contact</a>
      </NavDropdown>

    </nav>
  </NavContainer>
  );
}
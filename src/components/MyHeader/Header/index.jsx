import React from "react";
import {
  HeaderContainer,
  LogoContainer,
} from "./style";
import Navbar from "../Navbar";
import Contact from "../Contact"
import Burger from "../Burger/index";

const Header = () => {
  return (
    <>
      <Burger />
      <HeaderContainer>
          <LogoContainer>
            <img src="/images/logo_Header.png" alt="ToiDemain logo" />
          </LogoContainer>
        <Navbar />
        <Contact/>
      </HeaderContainer>
    </>
  );
};
export default Header;
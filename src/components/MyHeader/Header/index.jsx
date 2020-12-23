import React from "react";
import {
  HeaderContainer,
  HeaderBackground,
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
        <HeaderBackground>
          <LogoContainer>
            <img src="/images/logo_Header.png" alt="ToiDemain logo" />
          </LogoContainer>
        </HeaderBackground>
        <Navbar />
        <Contact/>
      </HeaderContainer>
    </>
  );
};
export default Header;
import React from "react";
import {
  HeaderContainer,
  TopBorder,
  HeaderBackground,
  LogoContainer,
  ContactContainer,
} from "./style";
import Navbar from "../Navbar";
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
      </HeaderContainer>
    </>
  );
};
export default Header;
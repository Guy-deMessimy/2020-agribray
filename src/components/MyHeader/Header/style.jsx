import styled from "styled-components";
import { device } from "../../layout/Device";

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 15vh;
  width: 100vw;
  background: #06623B;


  @media ${device.small_screen} {
    height: 140px;
  }
  @media ${device.tablet} {
    height: 140px;
  }
  @media ${device.mobile} {
    height: 80px;
  }
`;

export const HeaderBackground = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  height: 145px;
  width: 100%;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  border: green 2px solid;
  @media ${device.small_screen} {
    height: 100px;
    top: 25px;
  }
  @media ${device.tablet} {
    height: 100px;
    top: 25px;
  }
  @media ${device.mobile} {
    height: 55px;
    top: 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 12%;
  height: auto;
  @media ${device.small_screen} {
    height: 100px;
  }
  @media ${device.tablet} {
    margin-left: 20px;
    height: 100px;
    width: auto;
  }
  @media ${device.mobile} {
    margin-left: 20px;
    height: 55px;
    width: auto;
  }
  img {
    width: 55%;
    height: auto;
    border-radius: 50%;
    margin: auto;
    @media ${device.desktop} {
      max-width: 14vw;
    }
    @media ${device.small_screen} {
      max-height: 140px;
      width: 80%;
    }
    @media ${device.tablet} {
      height: 90px;
      width: auto;
    }
    @media ${device.mobile} {
      height: 50px;
      width: auto;
    }
  }
`;
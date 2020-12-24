import styled from "styled-components";
import { device } from "../../layout/Device";

export const HeaderContainer = styled.div`
  height: 10vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  border: solid 1px green;
`;

export const LogoContainer = styled.div`
  width: 15%;
  height: 90%;  
  display: flex;
  border: solid 1px green;
  img {
    width: 35%;
    height: 90%;
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
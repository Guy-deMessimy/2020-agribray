import styled from "styled-components";
import { device } from "../../layout/Device";

export const HeaderContainer = styled.div`
  max-width: 100vw;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #06623B;
`;

export const LogoContainer = styled.img`
  max-width: 15%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    max-width: 25%;
    height: auto;
    margin-left: 28vw;
  }
  @media ${device.mobile} {
    max-width: 35%;
    height: auto;
    margin-left: 20vw;
    }
  img {
    max-width: 80%;
	  height: auto;
    border-radius: 50%;
  }
`;
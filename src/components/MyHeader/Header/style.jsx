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
  background: #fff;
  border: solid 1px #06623B;
`;

export const LogoContainer = styled.div`
  max-width: 30%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    max-width: 45%;
    height: auto;
  }
  @media ${device.mobile} {
    max-width: 85%;
    height: auto;
    }
  img {
    max-width: 80%;
	  height: auto;
    border-radius: 50%;
  }
`;
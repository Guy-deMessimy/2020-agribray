import styled from "styled-components";
import { device } from "../layout/Device";

export const Fond = styled.div`
  background-image: url("/photos/Frontpage.jpg");
  background-repeat: no-repeat;
  min-width: 2000px;
  width: 100%;
  min-height: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  z-index: 1;
  @media screen and (max-width: 2000px) {
    left: 50%;
    margin-left: -1000px;
  }
  @media ${device.small_screen} {
    min-width: 2000px;
    width: 100%;
    min-height: 100%;
    height: auto;
    left: 10%;
    margin-left: -610px;
  }
  @media ${device.tablet} {
    min-width: 1000px;
    width: 100%;
    min-height: 100%;
    height: auto;
    left: 50%;
    margin-left: -510px;
  }
  @media ${device.mobile} {
    min-width: 1000px;
    width: 100%;
    min-height: 100%;
    height: auto;
    left: 50%;
    margin-left: -490px;
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  top: 400px;
  width: 100%;
  z-index: 2;
  @media ${device.mobile} {
    top: 100px;
  }
  @media ${device.tablet} {
    top: 100px;
  }
  @media ${device.small_screen} {
    top: 100px;
  }
  @media ${device.desktop} {
    top: 150px;
  }
`;

export const Logo = styled.img`
  min-height: 100%;
  min-width: 245px;
  width: 20%;
  height: auto;
  @media ${device.mobile} {
    min-height: 100%;
    min-width: 145px;
    width: 20%;
    height: auto;
  }
`;

export const Title = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 3em;
  text-align: center;
  letter-spacing: 0.2rem;
  margin-bottom: 1.5vh;
  @media ${device.mobile} {
    letter-spacing: 0.1rem;
    font-size: 0.8em;
  }
  @media ${device.tablet} {
    font-size: 2em;
  }
`;

export const SubTitle = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  text-align: center;
  letter-spacing: 0.2rem;
  font-weight: 200;
  @media ${device.mobile} {
    font-size: 0.6em;
    letter-spacing: 0.1rem;
  }
  @media ${device.tablet} {
    font-size: 1em;
  }
`;

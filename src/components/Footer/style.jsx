import styled from "styled-components";
import { device } from "../layout/Device";

export const Mainfooter = styled.footer`
  width: 100vw;
  position: absolute;
  height: auto;
  bottom: 0;
  display: flex;
  background-color: #585858;
  opacity: 0.73;
  color: white;
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: 2;
`;

export const Footcontainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px 2px 5px 2px;
  @media ${device.mobile} {
    font-size: 2vh;
    margin-top: 0.1vh;
  }
  @media ${device.teblet} {
    font-size: 2.5vh;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-around;
  margin-bottom: 20px;
  @media ${device.mobile} {
    flex-direction: column;
    margin-bottom: 0.2vh;
  }
  @media ${device.teblet} {
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
    column-gap: 20px;
  }
`;

export const Row2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 0.8em;
`;

export const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  align-items: center;
  line-height: 1.5em;
  @media ${device.tablet} {
    text-align: center;
  }
  @media ${device.mobile} {
    margin-bottom: 1vh;
  }
`;

export const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5em;
  @media ${device.tablet} {
    text-align: center;
  }
  @media ${device.mobile} {
    margin-bottom: 1vh;
  }
`;

export const Col3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5em;
  @media ${device.tablet} {
    text-align: center;
  }
  @media ${device.mobile} {
    margin-bottom: 1vh;
  }
`;

export const Col4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5em;
  margin-bottom: 15px;
  @media ${device.tablet} {
    text-align: center;
    margin-bottom: 1.5vh;
  }
  @media ${device.mobile} {
    margin-bottom: 2.5vh;
  }
`;
export const LinkList = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  @media ${device.mobile} {
    width: 40%;
    margin-top: 5px;
  }
`;
export const Trait = styled.div`
  background-color: #fff;
  height: 1px;
  width: 100%;
  margin-top: 0.8vh;
  margin-bottom: 0.8vh;
  @media ${device.mobile} {
    width: 50%;
    margin-top: 1vh;
    margin-bottom: 1vh;
  }
`;

export const Title = styled.h4`
  font-weight: 600;
  @media ${device.mobile} {
  }
`;

export const SocialLinks = styled.li`
  display: inline-block;
`;

export const Linkedin = styled.a`
  @media ${device.mobile} {
    margin-right: 1vh;
  }
`;

export const Facebook = styled.a``;

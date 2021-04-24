import styled from "styled-components";
import { device } from "../layout/Device";

export const Mainfooter = styled.footer`
  max-width: 100vw;
  height: auto;
  position: relative;
  bottom: 0;
  display: flex;
  background-color: #585858;
  color: white;
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
`;

export const Footcontainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px 2px 5px 2px;
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
    row-gap: 20px;
    column-gap: 30px;
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
    margin-bottom: 3vh;
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
    margin-bottom: 3vh;
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
    margin-bottom: 3vh;
  }
`;

export const Col4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5em;
  @media ${device.tablet} {
    text-align: center;
  }
  @media ${device.mobile} {
    margin-bottom: 3vh;
  }
`;
export const LinkList = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
  @media ${device.mobile} {
    width: 40%;
    margin-top: 10px;
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

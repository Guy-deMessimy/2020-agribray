import styled from "styled-components";
import { device } from "../layout/Devices";

export const Container = styled.div`
  display: flex;
  @media ${device.mobile} {
    flex-direction: column;
  }
  @media ${device.tablet} {
    flex-direction: column;
  }
  @media ${device.small_screen} {
    flex-direction: column;
  }
`;
export const Colonne1 = styled.div`
  padding: 10px 10px 10px 10px;
  @media ${device.mobile} {
  }
`;
export const AgriTitle = styled.h1`
  font-weight: bold;
  font-size: 2em;
  @media ${device.mobile} {
    text-align: center;
  }
`;
export const Trait = styled.div`
  border: solid 1px #649d66;
  width: 35%;
  margin-top: 10px;
  margin-bottom: 30px;
  @media ${device.mobile} {
    width: 100%;
  }
`;
export const Span = styled.span`
  color: #649d66;
`;
export const Paragraph1 = styled.p`
  text-align: justify;
  line-height: 1.8em;
  word-break: break-word;
  font-size: 1.5em;
`;
export const Colonne2 = styled.div`
  display: flex;
  @media ${device.mobile} {
    flex-direction: column;
  }
`;
export const TravauxAgricoles = styled.div`
  padding: 10px 10px 10px 10px;
  margin-top: 2vh;
  @media ${device.mobile} {
  }
`;
export const Image1 = styled.img`
  width: 700px;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 2vh;
  box-shadow: 5px 5px 10px 2px grey;
`;
export const TravauxTitle = styled.h2`
  font-weight: bold;
  font-size: 1.8em;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  margin-bottom: 2vh;
  @media ${device.mobile} {
    text-align: center;
  }
`;
export const Paragraph2 = styled.p`
  text-align: justify;
  line-height: 1.5em;
  font-size: 1.5em;
  word-break: break-word;
  padding-left: 0.5vw;
  padding-right: 0.5vw;
`;
export const Transports = styled.div`
  padding: 10px 10px 10px 10px;
  margin-top: 2vh;
  @media ${device.mobile} {
  }
`;
export const Image2 = styled.img`
  width: 700px;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 2vh;
  box-shadow: 5px 5px 10px 2px grey;
`;
export const TransportTitle = styled.h2`
  font-weight: bold;
  font-size: 1.8em;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  margin-bottom: 2vh;
`;
export const Paragraph3 = styled.p`
  text-align: justify;
  line-height: 1.5em;
  font-size: 1.5em;
  word-break: break-word;
  padding-left: 0.5vw;
  padding-right: 0.5vw;
`;

import styled from "styled-components";
import { device } from "../layout/Device";

export const ButtonContainer = styled.div `
`;

export const Button = styled.button`
    background-color: #06623B; 
    padding: 10px 10px 10px 10px;
    margin-left: 20px;
    margin-top: 2vh;
    border-radius: 5px;
    border: solid 1px #06623B;
    a {
    font-family: "Roboto", sans-serif;
    color: #000000;
    font-size: 2em;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    font-weight: 900;
    margin-top: 2vh;
    &:hover {
      color: #F6F578;
    }
    @media ${device.small_screen} {  
    }
    @media ${device.tablet} {
      font-size: 1em;
    }
    @media ${device.mobile} {
      font-size: 0.7em;
      padding: 5px 3px 5px 3px;
    }
    }
    `;
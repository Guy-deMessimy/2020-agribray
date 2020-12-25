import styled from "styled-components";
import { device } from "../../layout/Device";

export const ButtonContainer = styled.div `
`;

export const ContactButton = styled.button`
    background-color: #F6F578; 
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
    border: solid 1px #F6F578;
    a {
    font-family: "Roboto", sans-serif;
    color: #000000;
    font-size: 1.2em;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    &:hover {
      color: #06623B;
    }
    @media ${device.small_screen} {
        font-size: 0.8em;
    }
    @media ${device.tablet} {
        font-size: 0.8em;
    }
    @media ${device.mobile} {
        font-size: 0.8em;
    }
    }
    `;
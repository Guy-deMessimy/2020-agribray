import styled from "styled-components";
import { device } from "../layout/Device";

export const Fond = styled.div`
    background-image: url("/photos/Frontpage.jpg");
    background-repeat: no-repeat;
    min-height: 100%;
    min-width: 2000px;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    z-index:1;
        @media screen and (max-width: 2000px) { 
            left: 50%;
            margin-left: -1000px; 
            }
        @media ${device.small_screen} {
            
        }
        @media ${device.tablet} {

        }
        @media ${device.mobile} {
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
    z-index:2;
    @media ${device.mobile} {
        top: 285px;
    }
    @media ${device.tablet} {
        top: 285px;
    }
`;

export const Logo = styled.img`
    min-height: 100%;
    min-width: 245px;
    width: 12%;
    height: auto;
    @media ${device.mobile} { 
    }

`;

export const Title = styled.div`
font-family: "Roboto", sans-serif;
font-size: 3em;
letter-spacing: .2rem;
margin-bottom: 1vh;
@media ${device.mobile} {
    font-size: 1em;
    }
    @media ${device.tablet} {
        font-size: 2em;

}

`;

export const SubTitle = styled.div`
font-family: "Roboto", sans-serif;
font-size: 1em;
letter-spacing: .2rem;
font-weight: 200;
@media ${device.mobile} {
    font-size: 0.8em;
    }
    @media ${device.tablet} {
    font-size: 1em;
    }
`;


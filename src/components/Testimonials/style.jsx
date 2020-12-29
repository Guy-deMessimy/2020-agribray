import styled from "styled-components";
import { device } from "../layout/Device";

export const Fond = styled.div`
    background-image: linear-gradient(
        rgba(100, 158, 23, 0.74), 
        rgba(100, 158, 23, 0.74)
      ), url("/photos/Testimonials.jpg");
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
    top: 100px;
    width: 100%;
    z-index:2;
    @media ${device.mobile} {
        top: 125px;
    }
    @media ${device.tablet} {
        top: 285px;
    }
    @media ${device.small_screen} {
        top: 350px;
    }
`;

export const Title = styled.div`
font-family: "Roboto", sans-serif;
font-size: 3em;
font-weight: 800;
letter-spacing: .2rem;
margin-bottom: 1vh;
@media ${device.mobile} {
    font-size: 1em;
    }
    @media ${device.tablet} {
        font-size: 2em;
}
`;

export const Trait = styled.div`
    background-color: #fff;
    height: 2px;
    width:10%;
    margin-top: 0.8vh;
    margin-bottom: 0.8vh;
    @media ${device.mobile} {
        width: 5%;
        margin-top: 1vh;
        margin-bottom: 1vh;
        }
    @media ${device.tablet} {
        width: 8%;
        margin-top: 1vh;
        margin-bottom: 1vh;
        }
    `;
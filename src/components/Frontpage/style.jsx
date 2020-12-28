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
    font-size: 3em;
`;


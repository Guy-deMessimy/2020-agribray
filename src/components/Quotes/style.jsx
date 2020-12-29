import styled from "styled-components";
import { device } from "../layout/Device";

export const QuoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 40px auto;
    padding: 10px 15px 10px 15px;
    @media ${device.mobile} {
            margin: 20px auto;          
    }
    p {
        text-align: center;
        margin-bottom: 20px;
        font-family: "Roboto", sans-serif;
        color:#fff;
        font-size: 2em;
        
        @media ${device.mobile} {
            font-size: 1em;
            width: 15%;
            line-height: 4vh;
        
        }
        @media ${device.tablet} {
            font-size: 1.5em;
            width: 25%;
            line-height: 4vh;
      
        }
        @media ${device.small_screen} {
        font-size: 2em;
            width: 40%;
            line-height: 6vh;
        }
    } `;

export const QuotesContainer = styled.div`
    display: flex;
    `;

export const QuoteSpan = styled.span`
        height: 60px;
        width: 60px;
        margin: 0 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
            &::before {
            content:"";
            height: 20px;
            width: 20px;
            background-color:white;
            border-radius: 50%;
            transition: background-color 0.3s ease;
            @media ${device.mobile} {
                height: 10px;
                width: 10px;
                }
            }
            &:hover{
                &::before {
                    background-color: green;
                }
            }
            &::before {
                background-color: ${(props => props.active ? "green" : "white")}
            }
            `;
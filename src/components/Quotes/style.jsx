import styled from "styled-components";
import { device } from "../layout/Device";

export const QuoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px auto;
    width: 100%;
    height: auto;
    border: solid 1px blue;
    p {
        text-align: center;
        margin-bottom: 20px;
        font-family: "Roboto", sans-serif;
        color:#fff;
        font-size: 2em;
    }
    `;

export const QuotesContainer = styled.div`
    display: flex;`

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
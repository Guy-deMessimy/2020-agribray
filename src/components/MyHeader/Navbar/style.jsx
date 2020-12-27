import styled from "styled-components";
import { device } from "../../layout/Device";

export const NavContainer = styled.div`
  width: 65%;
  height: auto;
  background: #06623B;
  @media ${device.small_screen} {
  width: 60%;   
    }
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.mobile} {
    display: none;
  }
  nav {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    font-size: 1.2em;
    @media ${device.small_screen} {
      font-size: 0.8em;
    }
  }
  a {
    font-family: "Roboto", sans-serif;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
      color: #F6D743;
    }
  }
`;

export const DropdownItems = styled.div`
  display: none;
  position: absolute;
  padding-top: 18px;
  background-color: #06623B;
  min-width: 220px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  z-index: 2;
  a {
    display: block;
    text-align: left;
    padding: 20px 10px 20px 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    &:first-child {
      border-top: 1px solid rgba(255, 255, 255, 0.4);
    }
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.149);
    }
  }
`;

export const NavDropdown = styled.div`
  &:hover ${DropdownItems} {
    display: block;
    border-radius: 0px 0px 5px 5px;
    color: #F6D743;
  }
`;
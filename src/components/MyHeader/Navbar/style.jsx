import styled from "styled-components";
import { device } from "../../layout/Device";

export const NavContainer = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 2;
  height: 50px;
  width: 50%;
  margin: 0 15% 0 15%;
  background: #06623B;
  border-radius: 5px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  color: rgba(255, 255, 255, 0.4);
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
  nav {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    overflow: hidden;
    font-size: 1em;
    @media ${device.small_screen} {
      font-size: 1.4vw;
    }
    @media ${device.desktop} {
      font-size: max(1.1vw);
    }
  }
  a {
    font-family: "Roboto", sans-serif;
    display: inline-block;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
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
  min-width: 160px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  z-index: 2;
  a {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
    padding-top: 20px;
    display: block;
    text-align: left;
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
  display: inline-block;
  &:hover ${DropdownItems} {
    display: block;
    background-color: #06623B;
    border-radius: 0px 0px 5px 5px;
    color: #F6D743;
  }
`;
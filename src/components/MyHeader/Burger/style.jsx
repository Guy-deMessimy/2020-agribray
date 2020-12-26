import styled from "styled-components";
import { device } from "../../layout/Device";

export const StyledBurgerMenu = styled.div`
  @media ${device.desktop} {
    display: none;
  }
  @media ${device.small_screen} {
    display: none;
  }
  .bm-burger-button {
    position: fixed;
    width: 40px;
    height: 20px;
    left: 15px;
    top: 10px;
    @media ${device.tablet} {
    }
    @media ${device.mobile} {
    
    }
  }
  .bm-burger-bars {
    background: #06623B;
    border-radius: 3px;
  }
  .bm-cross-button {
    height: 24px;
    width: 24px;
    background: #F6D743;
    border-radius: 3px;
  }
  .bm-cross {
    background: #000;
  }
  .bm-menu {
    position: relative;
    top: 0;
    background: #06623B;
    padding: 2.5em 1em;
    border-radius: 5px 0px 0px 0px;
  }
  .bm-item-list {
    color: #b8b7ad;
  }
  .bm-item {
    display: inline-block;
    text-decoration: none;
    transition: color 0.2s;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 1.2em;
    text-transform: uppercase;
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #ffffff66;
    :hover {
      background: #ffffff26;
      color: #F6D743;
    }
  }
  .bm-overlay {
    background: transparent;
  }
`;
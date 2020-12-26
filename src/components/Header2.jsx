import { AppBar, Toolbar, Button } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import headersData from "./HeadersData";
import useStyles from "./UseStyles";
import agribrayLogo from "./Agribray"

export default function Header() {
    const { header, menuButton, toolbar } = useStyles();

  const displayDesktop = () => {
    return <Toolbar className={toolbar}>{agribrayLogo}  <div>{getMenuButtons()}</div></Toolbar>;
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton
          }}
        >
          {label}
        </Button>
      );
    });
  };
  
  return (
    <header>
      <AppBar className={header}> {displayDesktop()}</AppBar>
    </header>
  );
}
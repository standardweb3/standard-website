import styled from "styled-components";
import React from "react";
import { ReactSVG } from "react-svg";

import tssun from "assets/images/tssun.svg";
import tsmoon from "assets/images/tsmoon.svg";

function ThemeSwitcher(props) {
  return (
    <div className={`${props.className}`}>
      <ReactSVG
        src={tsmoon}
        className={`ts__icon ${
          props._theme === "dark" ? " --activetheme" : ""
        }`}
        onClick={props.switchDark}
      />
      <ReactSVG
        src={tssun}
        className={`ts__icon ${props._theme === "dark" ? "" : "--activetheme"}`}
        onClick={props.switchLight}
      />
    </div>
  );
}

export default React.memo(styled(ThemeSwitcher)`
  position: fixed;
  display: inline-flex;
  z-index: 400;
  bottom: 25px;
  left: 25px;

  .--activetheme {
    fill: #cb338f !important;
    border-color: #cb338f !important;
  }

  .ts__icon {
    cursor: pointer;
    fill: grey;
    width: 36px;
    height: 36px;
    margin: 0 12px;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 8px;
    background: transparent;
    border: 1px solid grey;
  }

  img {
    fill: white;
    width: 50px;
  }
`);

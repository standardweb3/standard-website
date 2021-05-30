import styled from "styled-components";
import React from "react";
import { ReactSVG } from "react-svg";

import reset from "assets/images/reset.svg";

function Reset(props) {
  return (
    <div className={`${props.className}`}>
      <ReactSVG
        onClick={props.onClick}
        src={reset}
        className={`ts__icon ${
          props._theme === "dark" ? " --activetheme" : ""
        }`}
      />
    </div>
  );
}

export default React.memo(styled(Reset)`
  position: fixed;
  display: flex;
  text-align: center;
  z-index: 301;
  top: 50%;
  right: 36px;
  font-size: 16px;
  transform: translateY(-50%);
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 2px ${(props) => props.theme.textshadow};

  .ts__icon {
    cursor: pointer;
    fill: grey;
    width: 50px;
    height: 50px;
    margin: 0 12px;
    box-sizing: border-box;
    border-radius: 40px;
    padding: 4px;
    background: transparent;
    border: 1px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.25s ease-out;

    &:hover {
      background: #cb338f;
    }
  }
`);

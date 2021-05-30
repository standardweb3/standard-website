import React from "react";
import styled from "styled-components";

function Overlay(props) {
  return (
    <div className={`${props.className}`} onClick={props.close}>
      {props.children}
    </div>
  );
}

export default React.memo(styled(Overlay)`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 500;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation fadein 0.5s forwards;

  img {
    width: 20% !important;
    height: auto !important;

    ${(props) => props.theme.tablet} {
      width: 35% !important;
    }

    ${(props) => props.theme.mobile} {
      width: 50% !important;
    }
  }
`);

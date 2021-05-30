import styled from "styled-components";
import React, { useState } from "react";

function Tip2(props) {
  const [open, setOpen] = useState(true);
  return (
    open && (
      <div className={`${props.className}`} animate={{}}>
        Dear Standard Protocol Supporters,
        <br />
        <br />
        The Correct Uniswap Pair is
        <br />
        <strong>
          <a
            href={
              "https://v2.info.uniswap.org/pair/0xe94272661fd46362e5dd247221e0fc018a298d09"
            }
            alt="uniswap"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://v2.info.uniswap.org/pair/0xe94272661fd46362e5dd247221e0fc018a298d09
          </a>
        </strong>
        <br />
        <br />
        The Token Contract address is
        <br />
        <strong>0x9040e237c3bf18347bb00957dc22167d0f2b999d</strong>
        <br />
        <button
          onClick={() => {
            setOpen(false);
          }}
        >
          close
        </button>
      </div>
    )
  );
}

export default React.memo(styled(Tip2)`
  position: fixed;
  // display: flex;
  text-align: center;
  background: #cb338f;
  color: #fff;
  text-shadow: 1px 1px #000;
  padding: 14px 14px;
  z-index: 301;
  // color: #000;
  top: 0;
  left: 0;
  width: 100%;
  // height: 100%;
  font-size: 16px;

  a {
    color: #fff;
    word-break: break-word;
  }

  strong {
    word-break: break-word;
  }

  button {
    color: #fff;
    background: transparent;
    border: 2px solid #fff;
    margin-top: 24px;
    border-radius: 12px;
    padding: 7px 14px;
  }
`);

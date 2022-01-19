import styled from 'styled-components';
import React from 'react';

import github from 'assets/images/new/github.png';
import instagram from 'assets/images/instagram.png';
import linkedin from 'assets/images/linkedin.png';
// import docs from "assets/images/new/docs.png";

import gate from 'assets/images/listings/wtpgate.png';
import ku from 'assets/images/listings/wtpku.png';
import uni from 'assets/images/listings/uni.png';
import coinone from 'assets/images/listings/coinone.png';

function Socials(props) {
  return (
    <div className={`${props.className}`}>
      <div className="socials__inner">
        <a
          href="https://www.linkedin.com/company/standard-protocol"
          target="_blank"
          rel="noopener noreferrer"
          alt="linkedIn"
          className="btn--social"
        >
          <img src={linkedin} />
        </a>
        <a
          href="https://www.instagram.com/standarddefiofficial/"
          target="_blank"
          rel="noopener noreferrer"
          alt="instagram"
          className="btn--social"
        >
          <img src={instagram} />
        </a>
        <a
          href="https://www.github.com/digitalnativeinc/"
          target="_blank"
          rel="noopener noreferrer"
          alt="github"
          className="btn--social"
        >
          <img src={github} />
        </a>
      </div>
      <div className="socials__inner">
        <a
          href="https://v2.info.uniswap.org/pair/0xe94272661fd46362e5dd247221e0fc018a298d09"
          target="_blank"
          rel="noopener noreferrer"
          alt="uniswap"
          className="btn--social"
        >
          <img src={uni} />
        </a>
        <a
          href="https://www.gate.io/trade/stnd_usdt"
          target="_blank"
          rel="noopener noreferrer"
          alt="gate"
          className="btn--social"
        >
          <img src={gate} />
        </a>
        <a
          href="https://trade.kucoin.com/STND-USDT"
          target="_blank"
          rel="noopener noreferrer"
          alt="kucoin"
          className="btn--social"
        >
          <img src={ku} />
        </a>
        <a
          href="https://coinone.co.kr/exchange/trade/stnd/krw"
          target="_blank"
          rel="noopener noreferrer"
          alt="coineone"
          className="btn--social"
        >
          <img src={coinone} />
        </a>
      </div>
    </div>
  );
}

export default React.memo(styled(Socials)`
  position: fixed;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 400;
  bottom: 25px;
  right: 25px;

  .socials__inner {
    margin: 0;
    display: inline-flex;
    flex: 0;
    &:first-child {
      margin-bottom: 14px;
    }
  }

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 14px;
    // padding: 4px 20px;
  }

  img {
    width: 30px;
    height: 30px;
  }
`);

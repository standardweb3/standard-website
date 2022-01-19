import { useState } from 'react';
import styled from 'styled-components';
import React from 'react';

import gate from 'assets/images/listings/wtpgate.png';
import ku from 'assets/images/listings/wtpku.png';
import uni from 'assets/images/listings/uni.png';
import coinone from 'assets/images/listings/coinone.png';

function FloatingHelp(props) {
  const [show, setShow] = useState(false);
  return (
    <div className={`${props.className}`}>
      <div className="fh__inner">
        {
          <>
            <img src={gate} />
            <img src={ku} />
            <img src={uni} />
            <img src={coinone} />
          </>
        }
      </div>
    </div>
  );
}

export default React.memo(styled(FloatingHelp)`
  position: fixed;
  display: inline-block;
  right: 0;
  top: 80%;
  opacity: 20%;
  transform: translateY(-50%);
  background: #fff;
  z-index: 300;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  .fh__inner {
    display: inline-flex;
    padding: 12px 12px;

    img {
      width: 30px;
      margin-right: 8px;
    }
  }
`);

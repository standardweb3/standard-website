import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useViewportContext } from "Components/NewPageComponents/useViewport";

import mtr from "assets/images/new/mtr.png";
import ltr from "assets/images/new/ltr.png";
import stnd from "assets/images/new/stnd.png";

function Tokens(props) {
  const viewport = useViewportContext();

  return (
    <div className={`${props.className} tokens stndcontainer`}>
      <header>
        <motion.h1 drag={viewport === "desktopsm" || viewport === "desktop"}>
          Meet the Tokens
        </motion.h1>
      </header>
      <div className="tokens__content">
        <div className="tokens__content__left">
          <motion.div
            className="tokens__token tokens__token--card"
            drag={viewport === "desktopsm" || viewport === "desktop"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
          >
            <motion.img
              src={mtr}
              animate={{ rotate: 720 }}
              transition={{ duration: 2 }}
            />
            <div className="tokens__tokendesc">
              <h3>METER (MTR)</h3>
              <p>
                Meter (MTR) is the stablecoin which is generated posting a
                collateral. Holders can use MTR as a medium of exchange, to buy
                other assets, and to farm tokens within the Standard Protocol
                ecosystem by providing liquidity.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="tokens__token tokens__token--card"
            drag={viewport === "desktopsm" || viewport === "desktop"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
          >
            <motion.img
              src={ltr}
              animate={{ rotate: 720 }}
              transition={{ duration: 2 }}
            />
            <div className="tokens__tokendesc">
              <h3>LITER (LTR)</h3>
              <p>
                Liter (LTR) is a liquidity provider token that represents a
                share of the AMM module. Similar to LP tokens in Uniswap, LTR
                can be burned in an AMM to receive deposited assets. LTR can
                also be used for STND yield farming.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="tokens__token tokens__token--card"
            drag={viewport === "desktopsm" || viewport === "desktop"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
          >
            <motion.img
              src={stnd}
              animate={{ rotate: 720 }}
              transition={{ duration: 2 }}
            />
            <div className="tokens__tokendesc">
              <h3>STANDARD (STND)</h3>
              <p>
                Standard (STND) is the network and governance token for using
                Standard Protocol. Stability Fee generated from lending out MTR
                will be distributed among STND holders
              </p>
            </div>
          </motion.div>
        </div>
        <div className="tokens__content__right">
          <motion.div
            animate={{
              x: [1000, 0],
            }}
            transition={{ duration: 1 }}
            drag={viewport === "desktopsm" || viewport === "desktop"}
            className="tokens__stnddesc"
          >
            <h3>NETWORK STAKING</h3>
            <p>
              STND token holders have an option to stake STND on the Standard
              Protocol network. (Standard Protocol validators or collateral
              providers). By doing so, the staker receives the nomination reward
              and the network becomes more secured and decentralized.
            </p>
          </motion.div>

          <motion.div
            animate={{
              x: [1000, 0],
            }}
            transition={{ duration: 1.25 }}
            drag={viewport === "desktopsm" || viewport === "desktop"}
            className="tokens__stnddesc"
          >
            <h3>TRANSACTION</h3>
            <p>
              To use Standard protocol's system, user needs to pay fee with
              STND. STND can be burned or given to validators depending on the
              module's transaction.
            </p>
          </motion.div>

          <motion.div
            animate={{
              x: [1000, 0],
            }}
            transition={{ duration: 1.5 }}
            drag={viewport === "desktopsm" || viewport === "desktop"}
            className="tokens__stnddesc"
          >
            <h3>ON CHAIN GOVERNANCE</h3>
            <p>
              STND holders can participate in the governance of the Standard
              Protocol ecosystem.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(styled(Tokens)`
  color: ${(props) => props.theme.text};

  .tokens__content {
    display: flex;
    flex-wrap: wrap;
  }

  .tokens__content__left {
    flex: 1 1 auto;
    max-width: 60%;
    ${(props) => props.theme.tablet} {
      max-width: none;
    }
  }

  .tokens__content__right {
    max-width: 40%;
    ${(props) => props.theme.tablet} {
      max-width: none;
    }
    padding-left: 24px;
    box-sizing: border-box;
  }

  .tokens__stnddesc {
    margin-bottom: 36px;
  }

  .tokens__token {
    display: flex;
    align-items: center;
  }

  img {
    width: 120px;
    height: 120px;
    margin-right: 24px;
    ${(props) => props.theme.mobile} {
      width: 80px;
      height: 80px;
    }
  }

  .tokens__tokendesc {
    text-align: start;
  }

  h3 {
    text-align: start;
    color: #f365bd;
    font-size: 24px;
    line-height: 36px;
    font-weight: 700;
  }

  p {
    text-align: start;
    line-height: 24px;
  }

  .tokens__token--card {
    flex: 1 1 auto;
    ${(props) => props.theme.tabletsm} {
      width: 100%;
    }

    background: ${(props) => props.theme.cardbg};
    border-radius: 24px;
    padding: 24px;
    margin-bottom: 24px;
  }

  .tokens__token--card:hover {
    background-color: ${(props) => props.theme.cardbghover};
  }
`);

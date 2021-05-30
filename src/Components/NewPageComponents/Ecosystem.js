import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useViewportContext } from "Components/NewPageComponents/useViewport";

import bgabout from "assets/images/new/bgabout.png";
function Ecosystem(props) {
  const viewport = useViewportContext();

  return (
    <div className={`${props.className} ecosystem stndcontainer`}>
      <header>
        <motion.h1 drag={viewport === "desktopsm" || viewport === "desktop"}>
          EXPLORE STANDARD
        </motion.h1>
      </header>
      <div className="ecosystem__cards">
        <motion.div
          drag={viewport === "desktopsm" || viewport === "desktop"}
          animate={{
            scale: [0.5, 1],
            y: [1000, 0],
          }}
          transition={{ duration: 0.5 }}
          className="ecosystem__card"
        >
          <motion.div
            className="ecosystem__card__content"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
          >
            <h3>CRYPTO ASSET STAKING PLATFORM</h3>
            <p>
              Digital asset holders can be part of Standard Protocol’s ecosystem
              by providing liquidity. The providers are rewarded with LTR and
              STND.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          drag={viewport === "desktopsm" || viewport === "desktop"}
          animate={{
            scale: [0.5, 1],
            y: [1000, 0],
          }}
          transition={{ duration: 0.75 }}
          className="ecosystem__card"
        >
          <motion.div
            className="ecosystem__card__content"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
          >
            <h3>DECENTRALIZED EXCHANGE</h3>
            <p>
              Automated market makers(AMM) in Standard Protocol's ecosystem
              provides instant decentralized exchanges between digital assets
              with arbitrage opportunities in the event of collateral the
              liquidation.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          drag={viewport === "desktopsm" || viewport === "desktop"}
          animate={{
            scale: [0.5, 1],
            y: [1000, 0],
          }}
          transition={{ duration: 1 }}
          className="ecosystem__card"
        >
          <motion.div
            className="ecosystem__card__content"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
          >
            <h3>POSITION MONITORS</h3>
            <p>
              Position monitors provides access to the CDPs and liquidators can
              find CDPS to be liquidated to the AMM. Liquidators are rewarded
              with a portion of liquidation
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default React.memo(styled(Ecosystem)`
  color: ${(props) => props.theme.text};

  .Typewriter {
    text-align: start;
  }

  button {
    color: #fff;
  }

  p {
    line-height: 24px;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    color: #f365bd;
    min-height: 50px;
  }

  .ecosystem__cards {
    // display: flex;
    // justify-content: flex-start;
    // align-items: stretch;
    flex-wrap: wrap;
  }

  .ecosystem__card__content {
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.cardbg};
    border-radius: 24px;
    padding: 24px;
  }

  .ecosystem__card {
    text-align: start;
    // flex: 1 1 auto;
    max-width: 700px;
    // width: calc(33.33% - 20px);
    margin-right: 20px;
    margin-bottom: 20px;

    ${(props) => props.theme.tablet} {
      // width: calc(50% - 20px);
    }

    ${(props) => props.theme.mobile} {
      // width: 100%;
      margin-right: 0;
    }
  }

  .ecosystem__card__content:hover {
    background-color: ${(props) => props.theme.cardbghover};
  }
`);

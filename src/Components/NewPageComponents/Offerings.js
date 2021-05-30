import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useViewportContext } from "Components/NewPageComponents/useViewport";

function Offerings(props) {
  const viewport = useViewportContext();

  return (
    <div className={`${props.className} offerings stndcontainer`}>
      <header>
        <motion.h1 drag={viewport === "desktopsm" || viewport === "desktop"}>
          What Standard brings
          <br /> To the table
        </motion.h1>
      </header>
      <div className="offerings__cards">
        <motion.div
          drag={viewport === "desktopsm" || viewport === "desktop"}
          animate={{
            scale: [0.5, 1],
          }}
          className="offerings__card"
        >
          <motion.div
            className="offerings__card__content"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
          >
            <h3>PRICE STABILITY</h3>
            <p>
              Standard Protocol utilizes overcollataralization to achieve price
              stability of MTR, our stablecoin. This is unlike algorithmic
              stablecoins, which just rely on its system for maintaining price
              stability without backed assets. This also enables
              interoperability of MTR with other cryptocurrencies.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          drag={viewport === "desktopsm" || viewport === "desktop"}
          animate={{
            scale: [0.5, 1],
          }}
          className="offerings__card"
        >
          <motion.div
            className="offerings__card__content"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 1.05,
            }}
          >
            <h3>DECENTRALIZED ORACLE SYSTEM</h3>
            <p>
              Standard protocol also brings an incentivized dedicated oracle
              system to the blockchain industry. Standard protocol's oracle
              system has its own consensus algorithm to reward oracle providers
              in a decentralized manner. Standard Protocol's oracle providers
              are elected by governance.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          drag={viewport === "desktopsm" || viewport === "desktop"}
          animate={{
            scale: [0.5, 1],
          }}
          className="offerings__card"
        >
          <motion.div
            className="offerings__card__content"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 1.05,
            }}
          >
            <h3>MARKET EFFICIENT LIQUIDATION</h3>
            <p>
              Standard Protocol makes liquidation available on Automated Market
              Makers on our dex involving MTR, our stablecoin. This is different
              from other collateralized stablecoins that use auctions. These
              auctions tend to be exclusive to the governance token holders and
              also require scripts to participate. This makes barrier to entry
              for normal users and leads to plutocracy in the ecosystem.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default React.memo(styled(Offerings)`
  color: ${(props) => props.theme.text};
  position: relative;

  .offerings__bg {
    height: 400px;
    width: auto;

    ${(props) => props.theme.tabletsm} {
      height: 300px;
      width: auto;
    }
  }

  .Typewriter {
    text-align: start;
  }

  button {
    color: #fff;
  }

  .offerings__content {
    width: 100%;
    height: 100%;
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

  .offerings__cards {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
  }

  .offerings__card__content {
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.cardbg};

    border-radius: 24px;
    padding: 24px;
  }

  .offerings__card__content:hover {
    background-color: ${(props) => props.theme.cardbghover};
  }

  .offerings__card {
    text-align: start;
    // flex: 1 1 auto;
    width: calc(33.33% - 20px);
    margin-right: 20px;
    margin-bottom: 20px;

    ${(props) => props.theme.tablet} {
      width: calc(50% - 20px);
    }

    ${(props) => props.theme.tabletsm} {
      margin-right: 0;
      width: 100%;
    }
  }
`);

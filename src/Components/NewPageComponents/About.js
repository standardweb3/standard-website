import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import bgabout from "assets/images/new/stndtok.gif";
import { useViewportContext } from "Components/NewPageComponents/useViewport";

function About(props) {
  const viewport = useViewportContext();

  return (
    <div className={`${props.className} about stndcontainer`}>
      <header>
        <motion.h1 drag={viewport === "desktopsm" || viewport === "desktop"}>
          First Collateralized
          <br /> Rebasable Stablecoin
        </motion.h1>
      </header>
      <motion.img
        src={bgabout}
        animate={{ opacity: [1, 0], scale: [1, 0.5], y: [0, -100] }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        drag={viewport === "desktopsm" || viewport === "desktop"}
        animate={{
          opacity: [0, 0, 0, 0, 1],
        }}
        transition={{ duration: 1.5 }}
      >
        <motion.p
          className="about__desc"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.05 }}
        >
          Standard Protocol is a{" "}
          <span>Collateralized Rebasable Stablecoin (CRS) </span>
          protocol for synthetic assets operating across the Polkadot ecosystem.
        </motion.p>
      </motion.div>
      <motion.div
        drag={viewport === "desktopsm" || viewport === "desktop"}
        animate={{
          opacity: [0, 0, 0, 0, 1],
        }}
        transition={{ duration: 1.75 }}
      >
        <motion.p
          className="about__desc"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.05 }}
        >
          In addition to commonly used digital currency assets, Standard
          Protocol will also use <span>oracles</span> to bridge stocks, index
          funds, commodities and even legal currency funds from the traditional
          markets into the cryptocurrency markets
        </motion.p>
      </motion.div>
      <motion.div
        drag={viewport === "desktopsm" || viewport === "desktop"}
        animate={{
          opacity: [0, 0, 0, 0, 1],
        }}
        transition={{ duration: 2 }}
      >
        <motion.p
          className="about__desc"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.05 }}
        >
          Standard Protocol's vision is simple,
          <br />
          To <span>bridge the markets</span> and offer seamless digital products
          that tap into both traditional markets as well as cryptocurrency
          markets.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default React.memo(styled(About)`
  color: ${(props) => props.theme.text};
  text-align: start;
  position: relative;

  .Typewriter {
    text-align: start;
  }

  span {
    color: #f365bd;
  }

  img {
    position: absolute;
    width: 50%;
    height: auto;
  }

  .about__content {
    max-width: 700px;
  }

  .about__desc {
    max-width: 700px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.cardbg};
    border-radius: 24px;
    padding: 24px;
    margin-bottom: 20px;

    ${(props) => props.theme.tabletsm} {
      font-size: 16px;
    }
  }

  .about__desc:hover {
    background-color: ${(props) => props.theme.cardbghover};
  }
`);

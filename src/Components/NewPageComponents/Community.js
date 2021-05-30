import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useViewportContext } from "Components/NewPageComponents/useViewport";
import { Money, Cpu, Workshop } from "grommet-icons";

function Community(props) {
  const viewport = useViewportContext();

  return (
    <div className={`${props.className} community stndcontainer`}>
      <header>
        <motion.h1 drag={viewport === "desktopsm" || viewport === "desktop"}>
          Join Us
        </motion.h1>
      </header>
      <div className="community__cards">
        <motion.div
          drag={viewport === "desktopsm" || viewport === "desktop"}
          animate={{
            scale: [0.5, 1],
          }}
          className="community__card"
        >
          <motion.div
            className="community__card__content"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
          >
            <div className="community__card__header">
              <Cpu size="large" color="#fff" />
              <h3>Standard Builder Collective</h3>
            </div>
            <p>
              We are looking for builders who are passionate about decentralized
              finance. We prefer to work with people who have a burning desire
              to bridge centralized finance with DeFi. We embrace people who
              actually build and execute, instead of just coming up with ideas
              or bluff. We want builders. Join the Standard Builder Collective
              and be a part of the movement towards a world of open finance.
            </p>
            <a
              href="http://bit.ly/SBConWebsite"
              target="_blank"
              rel="noopener noreferrer"
              alt={`${props.name}-link`}
              className=""
            >
              <button>Sign Up</button>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          drag={viewport === "desktopsm" || viewport === "desktop"}
          animate={{
            scale: [0.5, 1],
          }}
          className="community__card"
        >
          <motion.div
            className="community__card__content"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 1.05,
            }}
          >
            <div className="community__card__header">
              <Money size="large" color="#fff" />
              <h3>Standard Staker Collective</h3>
            </div>
            <p>
              Stakers earn staking rewards for locking their tokens into nodes
              to help verify transactions on the Proof of Stake consensus
              mechanism on the Ethereum blockchain. If you are interested in
              staking in the Standard ecosystem, please sign up here, and we
              will send instructions to you when our staking program is ready
            </p>
            <a
              href="http://bit.ly/SSConWebsite"
              target="_blank"
              rel="noopener noreferrer"
              alt={`${props.name}-link`}
              className=""
            >
              <button>Sign Up</button>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          drag={viewport === "desktopsm" || viewport === "desktop"}
          animate={{
            scale: [0.5, 1],
          }}
          className="community__card"
        >
          <motion.div
            className="community__card__content"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 1.05,
            }}
          >
            <div className="community__card__header">
              <Workshop size="large" color="#fff" />
              <h3>Standard Evangelist Collective</h3>
            </div>
            <p>
              We cannot do it alone. That’s why we need you, our evangelist.
              Standard Evangelists are people who not only believe in the
              success of Standard, but also share and transcend their faith in
              us to those around them. If you “get” our vision, if you want
              others to make history with us, if you can’t stop talking about
              us, sharing about us or retweeting our pinned tweets, please do
              join our Standard Evangelist Collective. Apply here
            </p>
            <a
              href="http://bit.ly/SEConWebsite"
              target="_blank"
              rel="noopener noreferrer"
              alt={`${props.name}-link`}
              className=""
            >
              <button>Sign Up</button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default React.memo(styled(Community)`
  color: ${(props) => props.theme.text};
  text-align: start;
  position: relative;

  button {
    background: #31a6f4;
    border-radius: 12px;
    color: #fff;
    border: 0;
    outline: none;
    margin-top: 12px;
  }

  .community__bg {
    height: 400px;
    width: auto;

    ${(props) => props.theme.tabletsm} {
      height: 300px;
      width: auto;
    }
  }

  .community__content {
    width: 100%;
    height: 100%;
  }

  p {
    line-height: 24px;
    flex: 1 1 0;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    color: #f365bd;
    min-height: 50px;
  }

  .community__cards {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
  }

  .community__card__content {
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.cardbg};
    display: flex;
    flex-direction: column;

    border-radius: 24px;
    padding: 24px;

    svg {
      fill: #f365bd !important;
      stroke: #f365bd !important;
    }

    .community__card__header {
      display: flex;
      align-items: center;
      margin-bottom: 14px;

      h3 {
        margin: 0;
        margin-left: 24px;
        display: flex;
        align-items: center;
      }
    }
  }

  .community__card__content:hover {
    background-color: ${(props) => props.theme.cardbghover};
  }

  .community__card {
    text-align: start;
    // flex: 1 1 auto;
    width: calc(50% - 20px);
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

import React, { useState } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

import telegram from "assets/images/new/telegram.png";
import medium from "assets/images/new/medium.png";
import twitter from "assets/images/new/twitter.png";

import discord from "assets/images/new/discord.png";
import web3 from "assets/images/new/wtpweb33.png";
import wechat from "assets/images/new/wechat.png";

import wechatqr from "assets/images/new/wechatqr.jpeg";

import Overlay from "Components/NewPageComponents/Overlay2";
import { useViewportContext } from "Components/NewPageComponents/useViewport";

const WPS = [
  ["EN", "https://docsend.com/view/sp6antfgeqiziaqb"],
  ["ZH", "https://docsend.com/view/kxq2ke64eaceqq7q"],
  ["JA", "https://docsend.com/view/kpv3rtyvpdprmiun"],
  ["RU", "https://docsend.com/view/mu5g4gxwwgzdagk2"],
  ["ES", "https://docsend.com/view/2cv6pz3yxpseck4t"],
  ["PT", "https://docsend.com/view/fmeb2gqeu9sh94w8"],
  ["AR", "https://docsend.com/view/7f9j2fmesjx2r2ib"],
  ["ID", "https://docsend.com/view/cgk255r9ux49nvv8"],
];

function Home(props) {
  const viewport = useViewportContext();
  const [showOverlay, setShowOverlay] = useState(false);

  const viewOverlay = () => setShowOverlay(true);
  const closeOverlay = () => setShowOverlay(false);

  return (
    <div className={`${props.className} stndcontainer home`}>
      {showOverlay && (
        <Overlay close={closeOverlay}>
          <img src={wechatqr} />
        </Overlay>
      )}
      <header>
        <motion.div drag={viewport === "desktopsm" || viewport === "desktop"}>
          <Typewriter
            options={{
              wrapperClassName: "Typewriter__wrapper home__thenew__text",
              cursorClassName: "Typewriter__cursor home__thenew__text",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("THE NEW")
                .callFunction((obj) => {
                  obj.elements.cursor.innerHTML = "";
                })
                .start();
            }}
          />
        </motion.div>
        <motion.div drag={viewport === "desktopsm" || viewport === "desktop"}>
          <Typewriter
            options={{
              wrapperClassName: "Typewriter__wrapper home__standard__text",
              cursorClassName: "Typewriter__cursor home__standard__text",
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1300)
                .typeString("Standard")
                .callFunction((obj) => {
                  obj.elements.cursor.innerHTML = "";
                })
                .start();
            }}
          />
        </motion.div>
        <motion.div drag={viewport === "desktopsm" || viewport === "desktop"}>
          <div className="home__fda">
            <Typewriter
              options={{
                wrapperClassName: "Typewriter__wrapper home__fda__text",
                cursorClassName: "Typewriter__cursor home__fda__text",
                cursor: "",
                delay: 50,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(3000)
                  .callFunction((obj) => (obj.elements.cursor.innerHTML = "|"))
                  .typeString("For Digital Assets")
                  .callFunction((obj) => {
                    obj.elements.cursor.innerHTML = "";
                  })
                  .start();
              }}
            />
          </div>
        </motion.div>
      </header>
      <div className="home__rsrcs">
        <div className="home__dd btn--highlight home__rsrc">
          Whitepaper
          <ul className="home__dd__list">
            {WPS.sort((a, b) => (a[0] > b[0] ? 1 : a[0] == b[0] ? 0 : -1)).map(
              (wp) => (
                <li key={wp[0]}>
                  <a
                    href={wp[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="white-paper"
                  >
                    {wp[0]}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <a
            href="https://docsend.com/view/cjmaybgr9by2s84a"
            target="_blank"
            rel="noopener noreferrer"
            alt="deck"
            className="home__rsrc"
          >
            <button className="btn--opac">Slides</button>
          </a>
          <a
            href="https://github.com/w3f/Open-Grants-Program/pull/244"
            alt="web3-logo"
            target="_blank"
            className="home__rsrc"
            rel="noopener noreferrer"
          >
            <img
              className="home__web3"
              src={web3}
              alt="Web3 foundation-grants"
            />
          </a>
        </div>
      </div>
      <div className="home__socialbtns">
        <a
          alt="telegram"
          target="_blank"
          href="https://t.me/standard_protocol"
          rel="noopener noreferrer"
          className="btn--social"
        >
          <img src={telegram} />
        </a>
        <a
          alt="twitter"
          target="_blank"
          href="https://twitter.com/standarddefi"
          rel="noopener noreferrer"
          className="btn--social"
        >
          <img src={twitter} />
        </a>
        <a
          alt="medium"
          target="_blank"
          href="https://blog.standard.tech/"
          rel="noopener noreferrer"
          className="btn--social"
        >
          <img src={medium} />
        </a>
        <a
          alt="discord"
          target="_blank"
          href="https://discord.gg/BkcE8kR9B9"
          rel="noopener noreferrer"
          className="btn--social"
        >
          <img src={discord} />
        </a>
        <a
          rel="noopener noreferrer"
          alt="wechat"
          className="btn--social"
          onClick={viewOverlay}
        >
          <img src={wechat} />
        </a>
      </div>
    </div>
  );
}

export default React.memo(styled(Home)`
  text-align: start;
  font-size: 14px;

  .home__rsrc {
    margin-bottom: 14px;
  }
  .home__rsrcs {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 12px;

    .home__rcrs {
      margin-bottom: 12px;
    }
  }

  .home__dd {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    position: relative;
    z-index: 400;

    .home__dd__list {
      position: absolute;
      elevation: 100;
      top: 100%;
      right: 0;
      display: none;
      list-style-type: none;
      padding: 4px 0;

      li {
        background: #fff;
        cursor: pointer;
        z-index: 500;

        a {
          text-decoration: none;
          padding: 12px 20px;
          width: 100%;
          height: 100%;
          color: ${(props) => props.theme.textDark};
        }
      }

      li:hover {
        background: ${(props) => props.theme.highlight};
        background: #cb338f;
        a {
          color: ${(props) => props.theme.textLight};
        }
      }

      li:first-child {
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
      }

      li:last-child {
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
      }
    }

    &:hover {
      .home__dd__list {
        display: block;
      }
    }
  }

  a {
    display: inline-block;
  }
  img {
    width: 25px;
    height: 25px;
  }

  .Typewriter {
    text-align: start;
  }

  button {
    color: #fff;
    // margin-bottom: 12px;
  }

  .home__thenew__text {
    text-align: start;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 0;
    line-height: 1;
    letter-spacing: 5px;
    background: ${(props) => props.theme.thenew};
    background-position: -50% 0%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  .home__standard__text {
    text-shadow: 1px 1px 2px black;
    text-align: start;
    font-size: 80px;
    color: ${(props) => props.theme.text};
    font-weight: 700;
    margin: 0;
    letter-spacing: -1.75px;
    line-height: 1;
    ${(props) => props.theme.tabletsm} {
      font-size: 50px;
    }
  }

  .home__fda {
    margin-bottom: 40px;
  }

  .home__fda__text {
    color: #fff;
    text-shadow: 1px 1px 2px black;
    text-align: start;
    font-size: 40px;
    font-weight: 700;
    margin: 0;
    margin-bottom: 20px;
    letter-spacing: -0.44px;
    line-height: 0.85;

    ${(props) => props.theme.tabletsm} {
      font-size: 24px;
    }
  }

  .home__socialbtns {
    display: flex;
    margin-top: 24px;
    flex-wrap: wrap;
  }

  .home__web3 {
    width: 100px;
    height: auto;
  }

  .btn--highlight {
    margin-right: 20px;
  }

  .btn--opac {
    margin-right: 20px;
  }

  .btn--social {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    padding: 4px 20px;
    margin-bottom: 12px;
    cursor: pointer;
  }

  ${(props) => props.theme.mobile} {
    font-size: 12px;
    button {
      padding: 4px 20px;
    }
  }
`);

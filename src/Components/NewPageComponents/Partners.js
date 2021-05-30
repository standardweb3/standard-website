import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useViewportContext } from "Components/NewPageComponents/useViewport";
import { useThemeContext } from "Components/NewPageComponents/useTheme";

import polkakr from "assets/images/logos/wtppolkakr.png";
import bitblock from "assets/images/logos/wtpbitblock.png";
import a195 from "assets/images/logos/wtpa195.png";
import au21 from "assets/images/logos/wtpau21.png";
import blocksync from "assets/images/logos/wtpblocksync.png";
import crypto from "assets/images/logos/wtpcrypto.png";
import phoenix from "assets/images/logos/wtpphoenix.png";
import d64 from "assets/images/logos/wtpd64.png";
import dfg from "assets/images/logos/wtpdfg.png";
import link from "assets/images/logos/wtplink.png";
import lotus from "assets/images/logos/wtplotus.png";
import master from "assets/images/logos/wtpmaster.png";
import foursv from "assets/images/logos/wtp4sv.png";
import cms from "assets/images/logos/wtpcms.png";
import m6 from "assets/images/logos/wtpm6.png";
import signal from "assets/images/logos/wtpsignal.png";
import rarestone from "assets/images/logos/wtprarestone.png";
import spark from "assets/images/logos/wtpspark.png";
import cb from "assets/images/logos/wtpcb.png";
import ngc from "assets/images/logos/wtpngc.png";
import genblock from "assets/images/logos/wtpgenblock.png";
import nt from "assets/images/logos/wtpnt.png";
import alt from "assets/images/logos/wtpalt.png";
import av from "assets/images/logos/wtpav.png";
import nk from "assets/images/logos/wtpnk.png";
import ci from "assets/images/logos/wtpci.png";
import dxt from "assets/images/logos/wtpdxt.png";
import youbi from "assets/images/logos/wtpyoubi.png";
import chainfir from "assets/images/logos/wtpchainfir.png";

import avstar from "assets/images/logos/wtpavstar.png";
import bta from "assets/images/logos/wtpbta.png";

import il from "assets/images/logos/wtpil.png";
import plasm from "assets/images/logos/wtpplasm.png";
import polkaclub from "assets/images/logos/wtppolkaclub.png";
import bm from "assets/images/logos/wtpbm.png";
import darwinia from "assets/images/logos/wtpdarwinia.png";
import dext from "assets/images/logos/wtpdext.png";
import hapi from "assets/images/logos/wtphapi.png";
import idv from "assets/images/logos/wtpidv.png";
import konomi from "assets/images/logos/wtpkonomi.png";
import lit from "assets/images/logos/wtplit.png";
import pat from "assets/images/logos/wtppat.png";
import shyft from "assets/images/logos/wtpshyft.png";
import kucoin from "assets/images/logos/tpkucoin.png";
import gate from "assets/images/logos/tpgate.png";

import bpolkakr from "assets/images/logos/btppolkakr.png";
import bbitblock from "assets/images/logos/btpbitblock.png";
import ba195 from "assets/images/logos/btpa195.png";
import bau21 from "assets/images/logos/btpau21.png";
import bblocksync from "assets/images/logos/btpblocksync.png";
import bcrypto from "assets/images/logos/btpcrypto.png";
import bphoenix from "assets/images/logos/btpphoenix.png";
import bd64 from "assets/images/logos/btpd64.png";
import bdfg from "assets/images/logos/btpdfg.png";
import blink from "assets/images/logos/btplink.png";
import blotus from "assets/images/logos/btplotus.png";
import bmaster from "assets/images/logos/btpmaster.png";
import bfoursv from "assets/images/logos/btp4sv.png";
import bcms from "assets/images/logos/btpcms.png";
import bm6 from "assets/images/logos/btpm6.png";
import bsignal from "assets/images/logos/btpsignal.png";
import brarestone from "assets/images/logos/btprarestone.png";
import bspark from "assets/images/logos/btpspark.png";
import bcb from "assets/images/logos/btpcb.png";
import bngc from "assets/images/logos/btpngc.png";
import bgenblock from "assets/images/logos/btpgenblock.png";
import bnt from "assets/images/logos/btpnt.png";
import balt from "assets/images/logos/btpalt.png";
import bav from "assets/images/logos/btpav.png";
import bnk from "assets/images/logos/btpnk.png";
import bci from "assets/images/logos/btpci.png";
import bdxt from "assets/images/logos/btpdxt.png";
import byoubi from "assets/images/logos/btpyoubi.png";
import bchainfir from "assets/images/logos/btpchainfir.png";
import bavstar from "assets/images/logos/btpavstar.png";
import bbta from "assets/images/logos/btpbta.png";

import bil from "assets/images/logos/btpil.png";
import bplasm from "assets/images/logos/btpplasm.png";
import bbm from "assets/images/logos/btpbm.png";
import bdarwinia from "assets/images/logos/btpdarwinia.png";
import bdext from "assets/images/logos/btpdext.png";
import bhapi from "assets/images/logos/btphapi.png";
import bidv from "assets/images/logos/btpidv.png";
import bkonomi from "assets/images/logos/btpkonomi.png";
import blit from "assets/images/logos/btplit.png";
import bpat from "assets/images/logos/btppat.png";
import bshyft from "assets/images/logos/btpshyft.png";

const partners = [
  { blogo: bplasm, wlogo: plasm, url: "https://www.plasmnet.io/" },
  { blogo: polkaclub, wlogo: polkaclub, url: "" },
  {
    blogo: bil,
    wlogo: il,
    url: "https://illusionistgroup.com/",
  },
  { blogo: kucoin, wlogo: kucoin, url: "https://trade.kucoin.com/STND-USDT" },
  { blogo: gate, wlogo: gate, url: "https://www.gate.io/trade/stnd_usdt" },
  { blogo: bbm, wlogo: bm, url: "https://www.bridgemutual.io/" },
  { blogo: bdarwinia, wlogo: darwinia, url: "https://darwinia.network/" },
  { blogo: bdext, wlogo: dext, url: "https://www.dextools.io/" },
  { blogo: bhapi, wlogo: hapi, url: "https://www.hapi.one/" },
  { blogo: bidv, wlogo: idv, url: "https://idavoll.network/" },
  { blogo: bkonomi, wlogo: konomi, url: "https://www.konomi.network/" },
  { blogo: blit, wlogo: lit, url: "https://www.litentry.com/" },
  { blogo: bpat, wlogo: pat, url: "https://patract.io/" },
  { blogo: bshyft, wlogo: shyft, url: "https://shyft.network/" },
];

const backers = [
  { blogo: bcms, wlogo: cms, url: "http://cmsholdings.io/" },
  { blogo: bfoursv, wlogo: foursv, url: "https://4sv.io/" },
  { blogo: bdfg, wlogo: dfg, url: "https://www.dfg.group/" },
  { blogo: bd64, wlogo: d64, url: "https://www.d64.vc" },
  { blogo: blink, wlogo: link, url: "https://www.linkpad.vc/" },
  { blogo: ba195, wlogo: a195, url: "https://www.a195.capital/" },
  { blogo: bm6, wlogo: m6, url: "https://momentum6.com/" },
  { blogo: bau21, wlogo: au21, url: "https://au21.capital/" },
  { blogo: bcrypto, wlogo: crypto, url: "https://www.cryptodormfund.org/" },
  { blogo: bblocksync, wlogo: blocksync, url: "https://www.blocksync.com/" },
  { blogo: bphoenix, wlogo: phoenix, url: "http://www.phoenix-vc.com/" },
  { blogo: blotus, wlogo: lotus, url: "https://www.lotuscapital.me/" },
  { blogo: bmaster, wlogo: master, url: "https://master.ventures/" },
  {
    blogo: bsignal,
    wlogo: signal,
    url: "https://signal.vc/",
    style: { width: "180px" },
  },
  { blogo: brarestone, wlogo: rarestone, url: "https://rarestone.capital/" },
  { blogo: bspark, wlogo: spark, url: "https://www.sparkdigitalcapital.com/" },
  { blogo: bcb, wlogo: cb, url: "https://www.carbon.blue/" },
  { blogo: bngc, wlogo: ngc, url: "https://www.ngc.fund/" },
  {
    blogo: bgenblock,
    wlogo: genblock,
    url: "https://genblock.capital/",
    style: { width: "160px" },
  },
  { blogo: bnt, wlogo: nt, url: "https://www.newtribe.capital" },
  { blogo: bbitblock, wlogo: bitblock, url: "https://www.bitblockcap.com/" },
  { blogo: bpolkakr, wlogo: polkakr, url: "https://www.polkakr.com/" },
  { blogo: balt, wlogo: alt, url: "" },
  { blogo: bav, wlogo: av, url: "https://www.avstarcapital.net/" },
  { blogo: bnk, wlogo: nk, url: "https://www.nodekapital.io/" },
  { blogo: bci, wlogo: ci, url: "" },
  { blogo: bdxt, wlogo: dxt, url: "https://www.dextools.io/" },
  { blogo: byoubi, wlogo: youbi, url: "https://www.youbicapital.com/" },
  {
    blogo: bchainfir,
    wlogo: chainfir,
    url: "http://www.chainfir.com/en/index.php?m=content&c=index&a=lists&catid=2",
  },
  { blogo: bavstar, wlogo: avstar, url: "https://www.avstarcapital.net/" },
  {
    blogo: bbta,
    wlogo: bta,
    url: "https://bta.ventures/",
  },
];

function Partners(props) {
  const viewport = useViewportContext();
  const theme = useThemeContext();

  return (
    <div className={`${props.className} partners stndcontainer`}>
      <header>
        <motion.h1 drag={viewport === "desktopsm" || viewport === "desktop"}>
          Who you work with matters
        </motion.h1>
      </header>

      <motion.div
        drag={viewport === "desktopsm" || viewport === "desktop"}
        className="sponsors"
      >
        {backers.map((backer, index) => {
          return (
            <motion.div
              key={backer.wlogo}
              className="partners__partner"
              animate={{ opacity: [0, 1], x: [1000, 0] }}
              transition={{ duration: 0.1 * index + 0.5 }}
            >
              <motion.a
                animate={{ y: [10, 0, 10] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.5 * (index % 5) + 2,
                }}
                key={index}
                href={backer.url}
                alt="telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={backer.style}
                  src={theme === "dark" ? backer.wlogo : backer.blogo}
                  alt="temp"
                />
              </motion.a>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.h3 drag={viewport === "desktopsm" || viewport === "desktop"}>
        Strategic Partners
      </motion.h3>

      <motion.div
        drag={viewport === "desktopsm" || viewport === "desktop"}
        className="sponsors"
      >
        {partners.map((backer, index) => {
          return (
            <motion.div
              key={backer.wlogo}
              className="partners__partner"
              animate={{ opacity: [0, 1], x: [1000, 0] }}
              transition={{
                duration: 0.1 * index + 0.5 + 0.1 * backers.length,
              }}
            >
              <motion.a
                animate={{ y: [10, 0, 10] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.5 * (index % 5) + 2,
                }}
                key={index}
                href={backer.url}
                alt="telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={backer.style}
                  src={theme === "dark" ? backer.wlogo : backer.blogo}
                  alt="temp"
                />
              </motion.a>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default React.memo(styled(Partners)`
  color: ${(props) => props.theme.text};
  text-align: start;

  h3 {
    font-weight: 700;
    margin: 48px 0;
  }

  .sponsors {
    display: flex;
    align-items: center;
    // justify-content: center;
    flex-wrap: wrap;
    position: relative;
    ${(props) => props.theme.mobile} {
      justify-content: center;
    }
  }

  a {
    width: auto;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    cursor: pointer;

    ${(props) => props.theme.mobile} {
      width: calc(50%-60px);
      margin: 16px;
    }
  }

  img {
    object-fit: contain;
    width: 120px;
    height: 72px;
    ${(props) => props.theme.mobile} {
      width: 100px;
    }
  }

  .Typewriter {
    text-align: start;
  }

  button {
    color: #fff;
  }
`);

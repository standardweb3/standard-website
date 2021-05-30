import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

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

const backers = [
  { logo: cms, url: "http://cmsholdings.io/" },

  { logo: foursv, url: "https://4sv.io/" },
  { logo: dfg, url: "https://www.dfg.group/" },
  { logo: d64, url: "https://www.d64.vc" },
  { logo: link, url: "https://www.linkpad.vc/" },
  { logo: a195, url: "https://www.a195.capital/" },
  { logo: m6, url: "https://momentum6.com/" },
  { logo: au21, url: "https://au21.capital/" },
  { logo: crypto, url: "https://www.cryptodormfund.org/" },
  { logo: blocksync, url: "https://www.blocksync.com/" },
  { logo: phoenix, url: "http://www.phoenix-vc.com/" },
  { logo: lotus, url: "https://www.lotuscapital.me/" },
  { logo: master, url: "https://master.ventures/" },
  { logo: signal, url: "https://signal.vc/", style: { width: "180px" } },
  { logo: rarestone, url: "https://rarestone.capital/" },
  { logo: spark, url: "https://www.sparkdigitalcapital.com/" },

  { logo: cb, url: "https://www.carbon.blue/" },
  { logo: ngc, url: "https://www.ngc.fund/" },
  {
    logo: genblock,
    url: "https://genblock.capital/",
    style: { width: "160px" },
  },
  { logo: nt, url: "" },

  { logo: bitblock, url: "https://www.bitblockcap.com/" },
  { logo: polkakr, url: "https://www.polkakr.com/" },
];

const useStyles = createUseStyles((Themes) => {
  return {
    foursv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    backed: {
      paddingBottom: "48px",
    },
    sponsers: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    sponser: {
      // width: "100px",
      width: "auto",
      height: "100px",
      // background: "#0C0424",
      margin: "0 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "8px",
      margin: "30px 30px",
      cursor: "pointer",
      //  background: "rgba( 255, 255, 255, 0.3 )",
      //   boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      //   backdropFilter: "blur( 4px )",
      //   borderRadius: "50%",
      //   border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
    sponserImg: {
      objectFit: "contain",
      width: "120px",
      height: "72px",
    },
    "@media (max-width: 992px)": {
      sponser: {
        // width: "95px",
        margin: "30px 30px",
      },
    },
  };
});

function Backers(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <section className={classNames("backedSection", classes.backed)}>
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <h3 className="title mid-padding-y" style={{ margin: 0 }}>
              Backed by
            </h3>
            <div className={classNames("row", classes.sponsers)}>
              {backers.map((backer, index) => {
                return (
                  <a
                    key={index}
                    href={backer.url}
                    alt="telegram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.sponser}
                  >
                    <img
                      style={backer.style}
                      className={classes.sponserImg}
                      src={backer.logo}
                      alt="temp"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Backers;

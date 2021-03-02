import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

import polkakr from "assets/images/polkakr.png";
import polkabase from "assets/images/polkabase.png";
import bitblock from "assets/images/bitblock.jpg";
import chilio from "assets/images/chilio.png";

const useStyles = createUseStyles((Themes) => {
  return {
    backed: {},
    sponsers: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    sponser: {
      width: "100px",
      height: "100px",
      background: "#fff",
      margin: "0 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      padding: "8px",
    },
    "@media (max-width: 992px)": {
      sponser: {
        width: "95px",
        margin: "10px 10px",
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
          <div className="col-xs-10 col-xs-offset-1 backedSection-BG">
            <h3 className="title mid-padding-y ">Backed by</h3>
            <div className={classNames("row", classes.sponsers)}>
              <a
                href="https://www.polkakr.com/"
                alt="telegram"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.sponser}
              >
                <img className="back-icon" src={polkakr} alt="temp" />
              </a>
              <a
                href="https://www.polkabase.com/"
                alt="telegram"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.sponser}
              >
                <img className="back-icon" src={polkabase} alt="temp" />
              </a>
              <a
                href="https://www.bitblockcap.com/"
                alt="telegram"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.sponser}
              >
                <img className="back-icon" src={bitblock} alt="temp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Backers;

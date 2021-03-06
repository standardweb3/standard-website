import { useEffect, useState } from "react";
// import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

import AnimateHeight from "react-animate-height";

// const useStyles = createUseStyles((Themes) => {
//   return {};
// });
import contact1 from "assets/images/contact-1@2x.png";
import contact2 from "assets/images/contact-2@2x.png";
import contact3 from "assets/images/contact-3@2x.png";

function LearnMore(props) {
  return (
    <section className="contactUs sub-theme-color">
      <div className="container">
        <div className="row small-padding-y">
          <div className="col-xs-10 col-xs-offset-1">
            <h3 className="title">Ready to know more about Standard?</h3>
            <p className="paragraph">
              Join our community portals to get supports
            </p>
            <div className="row">
              <div className="col-xs-12">
                <a
                  href="https://t.me/standard_protocol"
                  alt="telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="portal-back-icon"
                    src={contact1}
                    alt="telegram"
                  />
                </a>
                <a
                  alt="discord"
                  href="https://discord.gg/BkcE8kR9B9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="portal-back-icon"
                    src={contact2}
                    alt="discord"
                  />
                </a>
                {/*<a href="" alt="">
                  <img className="portal-back-icon" src={contact3} alt="temp" />
                </a>*/}
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "4rem" }}>
          <div className="col-xs-6 col-md-2 col-xs-offset-3 col-md-offset-5">
            <a className="effect-btn-one" href="#" alt="Blank" target="_blank">
              Enter App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnMore;

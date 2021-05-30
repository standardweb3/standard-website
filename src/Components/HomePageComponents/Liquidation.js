// import { useEffect, useState } from "react";
// import { createUseStyles, useTheme } from "react-jss";
// import classNames from "classnames";
import liquidationGIF from "assets/images/standard-liquidation.gif";

// const useStyles = createUseStyles((Themes) => {
//   return {};
// });

function Liquidation(props) {
  return (
    <section className="permissionless">
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <div className="row">
              <div className="col-md-5 col-md-offset-1 col-md-push-6">
                <img src={liquidationGIF} alt="liquidation-animation" />
              </div>
              <div className="col-xs-12 col-md-6 text-left  col-md-pull-5">
                <h2 className="title">
                  Permissionless <br />
                  Access to <br />
                  Liquidated Assets
                </h2>
                <p className="paragraph">
                  Standard Protocol places liquidated assets in an AMM instead
                  of an auction, creating an opportunity for users to buy
                  discounted assets.
                </p>
                <div className="row">
                  <div className="col-md-5">
                    <a
                      className="effect-btn-one disabled-a"
                      href="#"
                      alt="Blank"
                      target="_blank"
                    >
                      Coming Soon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Liquidation;

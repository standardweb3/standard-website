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
                  Access on <br />
                  liquidated assets
                </h2>
                <p className="paragraph">
                  In Bear run, Standard places liquidated assets in
                  automated market maker instead of doing an auction, creating
                  an arbitrage where users can buy assets in a cheaper price.{" "}
                </p>
                <div className="row">
                  <div className="col-md-5">
                    <a
                      className="effect-btn-one"
                      href="#"
                      alt="Blank"
                      target="_blank"
                    >
                      Enter App
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

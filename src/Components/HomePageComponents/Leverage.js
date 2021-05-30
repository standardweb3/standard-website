import { createUseStyles, useTheme } from "react-jss";
// import classNames from "classnames";

import leverageGIF from "assets/images/standard-leverage.gif";
// import leverageGIF from "assets/videos/video11.mp4";

const useStyles = createUseStyles((Themes) => {
  return {
    icon: {
      width: "50px",
      height: "50px",
      margin: "0 1rem",
    },
  };
});
function Leverage(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <section className="leverage main-theme-color">
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <div className="row">
              <div className="col-xs-12 col-md-5">
                {/*<video autoPlay loop muted preload="true">
                  <source src={leverageGIF} type="video/mp4" />
  </video>*/}
                <img src={leverageGIF} alt="leverage-animation" />
              </div>
              <div className="col-xs-12 col-md-6 text-left col-md-offset-1 col-xs-offset-0">
                <h2 className="title">Leverage Everything</h2>
                <p className="paragraph">
                  Standard Protocol enables leveraged trading of virtual stocks
                  and commodities, backed by synthetic assets that are minted
                  through the use of oracles.
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

export default Leverage;

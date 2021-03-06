import { createUseStyles, useTheme } from "react-jss";
// import classNames from "classnames";

import leverageGIF from "assets/images/standard-leverage.gif";

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
                <img src={leverageGIF} alt="leverage-animation" />
              </div>
              <div className="col-xs-12 col-md-6 text-left col-md-offset-1 col-xs-offset-0">
                <h2 className="title">Leverage on everything</h2>
                <p className="paragraph">
                  Standard enables leveraged trading of virtual stocks and
                  commodities, backed by synthetic assets that are minted
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

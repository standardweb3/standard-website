// import { createUseStyles, useTheme } from "react-jss";
// import classNames from "classnames";

import meetGIF from "assets/images/standard-meet.gif";

// const useStyles = createUseStyles((Themes) => {
//   return {
//   };
// });

function Meet(props) {
  // const theme = useTheme();
  // const classes = useStyles({ props, theme });

  return (
    <section className="algorithmic">
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <div className="row flex-column-reverse flex-md-row">
              <div className="col-md-5 col-md-offset-1 col-md-push-6">
                <img src={meetGIF} alt="meet-animation" />
              </div>
              <div className="col-xs-12 col-md-6 text-left  col-md-pull-5">
                <h2 className="title">
                  Meet collaterized algorithmic <br />
                  stablecoin
                </h2>
                <p className="paragraph">
                  With elastic supply determined by rebase mechanism, Standard maintains an decentralized algorithmic reserve bank
                  which generates stablecoin in the price of 1USD with
                  decentralized governance
                </p>
                <div className="row">
                  <div className="col-xs-12 col-md-5">
                    <a
                      className="effect-btn-one pink"
                      href="#"
                      alt="Blank"
                      target="_blank"
                    >
                      Learn More
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

export default Meet;

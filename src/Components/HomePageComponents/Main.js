import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

// Images
import web3 from "assets/images/web3-foundation-grants@2x.png";
import backgroundVideo from "assets/videos/video1.mp4";

const useStyles = createUseStyles((Themes) => {
  return {
    main: { position: "relative" },
    video: {
      zIndex: 0,
      position: "absolute",
    },
    text: {},
    header: {
      fontSize: "80px",
    },
    enterBtn: {
      paddingLeft: 0,
    },
    subheader: { fontSize: "28px" },
    enter: {},
    "@media (max-width: 1200px)": {
      header: {
        fontSize: "70px",
      },
      subheader: {
        fontSize: "20px",
      },
    },
    "@media (max-width: 992px)": {
      main: {
        marginBottom: "300px",
      },
      video: {
        transform: "translateX(-50%)",
        top: "80%",
      },
      text: {
        textShadow: "1px 1px 2px #08091D",
      },
      header: {
        marginTop: "30px",
        fontSize: "48px",
      },
      subheader: {
        fontSize: "20px",
      },
      enterBtn: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      enter: {
        color: "#fff",
        // textShadow: "1px 1px 2px #000",
        background: "rgba(61,154,217, 0.5)",
      },
    },
    "@media (max-width: 456px)": {
      header: {
        fontSize: "36px",
      },
      subheader: {
        fontSize: "14px",
      },
    },
  };
});

function Main(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <section className={classNames("landing main-theme-color", classes.main)}>
      <video className={classes.video} autoPlay loop muted preload="true">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="container" style={{ paddingTop: "0" }}>
        <div className="row">
          <div className="col-xs-10 col-md-12 col-xs-offset-1 col-md-offset-0 text-left">
            <div className="row">
              <div className="row">
                <div className="col-xs-12 col-md-8">
                  <div className="col-xs-12">
                    <h1
                      className={classNames(
                        "title",
                        classes.text,
                        classes.header
                      )}
                    >
                      The Standard for <br />
                      Digital Assets
                      <br />
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="row">
                  <div className="col-xs-12 mt-3">
                    <p
                      className={classNames(
                        "paragraph",
                        classes.text,
                        classes.subheader
                      )}
                    >
                      Standard protocol delivers collaterized, interoperable
                      Digital Assets on Substrate
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-md-8">
                  <div className="row">
                    <div
                      className={classNames(
                        "col-xs-12 col-md-6",
                        classes.enterBtn
                      )}
                    >
                      <a
                        className={classNames("effect-btn-one", classes.enter)}
                        href="#"
                        alt="Blank"
                        target="_blank"
                      >
                        Enter App
                      </a>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <img
                        className="web3-foundation-img"
                        src={web3}
                        alt="Web3 foundation-grants"
                      />
                    </div>
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

export default Main;

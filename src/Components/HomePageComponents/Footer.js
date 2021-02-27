import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

import twitter from "assets/images/twitter@2x.png";
import medium from "assets/images/medium@2x.png";
import linkedin from "assets/images/linkedin@2x.png";

const useStyles = createUseStyles((Themes) => {
  return {
    footer: {
      color: "#fff",
    },
  };
});

function Footer(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <div
      className={classNames("container", classes.footer)}
      style={{ paddingTop: "24px" }}
    >
      <div className="row text-left">
        <div className="col-xs-12 col-md-3 footer-main-section">
          <p>STANDARD</p>
          <p>
            Digital Assets
            <br />
            At the highest Standard
          </p>
        </div>

        <div className="col-xs-12 col-md-2 col-md-offset-1 desktop-collapse-section">
          <p className="footer-sub-title">Papers</p>
          <a className="footer-link" href="#" alt="#">
            White Paper
          </a>
          <a className="footer-link" href="#" alt="#">
            Grant Applications
          </a>
        </div>

        <div className="col-xs-12 col-md-2 desktop-collapse-section">
          <p className="footer-sub-title">Link</p>
          <a className="footer-link" href="#" alt="#">
            Team
          </a>
          <a className="footer-link" href="#" alt="#">
            Brand Guide
          </a>
          <a className="footer-link" href="#" alt="#">
            Blog
          </a>
        </div>

        <div className="col-xs-12 mobile-collapse-section">
          <a href="#papers" data-toggle="collapse" className="toggle-link">
            Papers
          </a>
          <div id="papers" className="collapse">
            <a className="footer-link" href="#" alt="#">
              White Paper
            </a>
            <a className="footer-link" href="#" alt="#">
              Grant Applications
            </a>
          </div>
        </div>

        <div className="col-xs-12 mobile-collapse-section">
          <a href="#link" data-toggle="collapse" className="toggle-link">
            Link
          </a>
          <div id="link" className="collapse">
            <a className="footer-link" href="#" alt="#">
              Team
            </a>
            <a className="footer-link" href="#" alt="#">
              Brand Guide
            </a>
            <a className="footer-link" href="#" alt="#">
              Blog
            </a>
          </div>
        </div>

        <div className="col-xs-12 col-md-4 social-section">
          <p className="footer-sub-title">Socials</p>
          <div>
            <a href="#" target="_blank">
              <img className="social-icon" src={twitter} alt="twitter" />
            </a>
            <a href="#" target="_blank">
              <img className="social-icon" src={medium} alt="medium" />
            </a>
            <a href="#" target="_blank">
              <img className="social-icon" src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className="row text-left mid-padding-y">
        <div className="col-md-12">© 2021 Standard</div>
      </div>
    </div>
  );
}

export default Footer;

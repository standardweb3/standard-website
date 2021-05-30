import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

import twitter from "assets/images/twitter@2x.png";
import medium from "assets/images/medium@2x.png";
import linkedin from "assets/images/linkedin@2x.png";
import instagram from "assets/images/instagram.png";

import standardLogo from "assets/images/standard-logo.png";
import wp from "assets/whitepaper.pdf";

const useStyles = createUseStyles((Themes) => {
  return {
    footer: {
      color: "#fff",
    },
    logo: {
      marginBottom: "25px",
      width: "200px",
    },
    footer_sub_title: {
      fontWeight: 600,
      fontSize: "16px",
    },
    contact_container: {
      display: "inline-block",
      marginLeft: "12px",
    },
    contact: {
      fontSize: "14px",
      margin: 0,
      display: "inline-block",
    },
    copyright: {
      marginRight: "12px",
      paddingLeft: "15px",
      display: "inline-block",
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
          <img className={classes.logo} src={standardLogo} alt="logo" />
          <p>
            The Standard for
            <br />
            Digital Assets
          </p>
        </div>

        <div className="col-xs-12 col-md-2 col-md-offset-1 desktop-collapse-section">
          <p
            className={classNames("footer-sub-title", classes.footer_sub_title)}
          >
            Documentation
          </p>
          <a
            href="https://tinyurl.com/stndPitchDeck"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            alt="deck"
          >
            Slides
          </a>
          <a
            className="footer-link"
            href="https://tinyurl.com/stndWP"
            target="_blank"
            rel="noopener noreferrer"
            alt="white-paper"
          >
            White Paper
          </a>
          <a
            className="footer-link"
            href="https://github.com/w3f/Open-Grants-Program/pull/244"
            target="_blank"
            rel="noopener noreferrer"
            alt="grant-application"
          >
            W3F Grant Application
          </a>
        </div>

        <div className="col-xs-12 col-md-2 desktop-collapse-section">
          <p
            className={classNames("footer-sub-title", classes.footer_sub_title)}
          >
            Links
          </p>
          <a
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/digitalnativeinc/standard-substrate"
            alt="github"
          >
            GitHub
          </a>
          <a
            className="footer-link"
            href="https://docs.standard.tech"
            target="_blank"
            rel="noopener noreferrer"
            alt="documentation"
          >
            Documentation
          </a>
          {/*<a className="footer-link" href="#" alt="#">
            Blog
          </a>*/}
        </div>

        <div className="col-xs-12 mobile-collapse-section">
          <div id="papers">
            <a
              href="https://tinyurl.com/stndPitchDeck"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              alt="white-paper"
            >
              Slides
            </a>
            <a
              href="https://tinyurl.com/stndWP"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              alt="white-paper"
            >
              White Paper
            </a>
            <a
              className="footer-link"
              alt="grant-application"
              href="https://github.com/w3f/Open-Grants-Program/pull/244"
              target="_blank"
              rel="noopener noreferrer"
            >
              W3F Grant Application
            </a>
          </div>
        </div>

        <div className="col-xs-12 mobile-collapse-section">
          <div id="link">
            <a
              className="footer-link"
              href="https://github.com/digitalnativeinc/standard-substrate"
              alt="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="footer-link"
              href="https://docs.standard.tech"
              alt="documentation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
            {/*<a className="footer-link" href="#" alt="#">
              Blog
            </a>*/}
          </div>
        </div>

        <div className="col-xs-12 col-md-4 social-section">
          <p
            className={classNames("footer-sub-title", classes.footer_sub_title)}
          >
            Social
          </p>
          <div>
            <a
              alt="twitter"
              target="_blank"
              href="https://twitter.com/standarddefi"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src={twitter} alt="twitter" />
            </a>
            <a
              alt="medium"
              target="_blank"
              href="https://blog.standard.tech/"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src={medium} alt="medium" />
            </a>
            <a
              href="https://www.linkedin.com/company/standard-protocol"
              target="_blank"
              rel="noopener noreferrer"
              alt="linkedIn"
            >
              <img className="social-icon" src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/standarddefiofficial/"
              target="_blank"
              rel="noopener noreferrer"
              alt="instagram"
            >
              <img className="social-icon" src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className="row text-left mid-padding-y">
        <div className={classNames(classes.copyright)}>© 2021 Standard</div>|
        <div className={classNames(classes.contact_container)}>
          <a
            className={classNames("footer-link", classes.contact)}
            href="mailto:contact@standard.tech"
            alt="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

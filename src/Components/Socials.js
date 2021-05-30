import styled from "styled-components";
import React from "react";

import github from "assets/images/new/github.png";
import instagram from "assets/images/instagram.png";
import linkedin from "assets/images/linkedin.png";
// import docs from "assets/images/new/docs.png";

function Socials(props) {
  return (
    <div className={`${props.className}`}>
      <a
        href="https://www.linkedin.com/company/standard-protocol"
        target="_blank"
        rel="noopener noreferrer"
        alt="linkedIn"
        className="btn--social"
      >
        <img src={linkedin} />
      </a>
      <a
        href="https://www.instagram.com/standarddefiofficial/"
        target="_blank"
        rel="noopener noreferrer"
        alt="instagram"
        className="btn--social"
      >
        <img src={instagram} />
      </a>
      <a
        href="https://www.github.com/digitalnativeinc/"
        target="_blank"
        rel="noopener noreferrer"
        alt="github"
        className="btn--social"
      >
        <img src={github} />
      </a>
    </div>
  );
}

export default React.memo(styled(Socials)`
  position: fixed;
  display: flex;
  z-index: 400;
  bottom: 25px;
  right: 25px;

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    // padding: 4px 20px;
  }

  img {
    width: 30px;
    height: 30px;
  }
`);

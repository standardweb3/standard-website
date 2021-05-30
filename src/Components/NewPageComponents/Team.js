import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useViewportContext } from "Components/NewPageComponents/useViewport";

import jay from "assets/images/tpjay.png";
import tony from "assets/images/tptony.png";
import billy from "assets/images/tpbilly.png";
import kang from "assets/images/tpkang.png";
import dixon from "assets/images/tpdixon.png";
import beli from "assets/images/tpbeli.png";
import mich from "assets/images/tpmich.png";
import dan from "assets/images/tpdan.png";

const TEAM_DATA = [
  {
    name: "Hyungsuk Kang",
    title: "Head of Technology",
    experiences: [
      "Software Engineer at Plasm",
      "Head Ambassador for East Asia of Polkadot",
      "Co-founder of PolkaKR",
    ],
    link: "www.linkedin.com/in/hyungsukkang",
    photo: kang,
  },
  {
    name: "Jaewon Shin",
    title: "Head of Business, Korea",
    experiences: [
      // "Founder of Chiko Media",
      "Co-founder of PolkaKR",
      "Formerly Korean Executive Director at BitBlock Group",
    ],
    link: "https://www.linkedin.com/in/jaewon-shin-7911b7194",
    photo: jay,
  },
  {
    name: "Billy Lee",
    title: "Head of Operations",
    experiences: [
      "Full stack web development engineer",
      "Leading all products of Standard Protocol",
    ],
    link: "https://www.linkedin.com/in/ziang-ling-195124ab/",
    photo: billy,
  },
  // {
  //   name: "Tony Ling",
  //   title: "Head of China",
  //   experiences: [
  //     "Founding partner of Bitblock Capital",
  //     "Guest lecturer at Zhejiang University",
  //     "Author of “Unlock the New Cipher, From Blockchain to Crypto”",
  //   ],
  //   link: "https://www.linkedin.com/in/ziang-ling-195124ab/",
  //   photo: tony,
  // },
  {
    name: "Dixon Wong",
    title: "Product Owner",
    experiences: [
      "Product Manager in Digital Banking",
      "Former Marketer and Analytics Consultant",
      "Ex TEDx Organiser",
    ],
    link: "https://www.linkedin.com/in/ziang-ling-195124ab/",
    photo: dixon,
  },
  {
    name: "Beli Hong",
    title: "Administrator, China",
    experiences: [
      "Co-founder of Fiat Capital",
      "Ex-chairman of Zhejiang University Blockchain Association",
      "Operational Director of DeepThinker Capital",
    ],
    link: "https://www.linkedin.com/in/ziang-ling-195124ab/",
    photo: beli,
  },
  {
    name: "Michelle Tsing",
    title: "Community Director",
    experiences: [
      "Managing Partner at Cognito Capital",
      "Co-founder of Governance Research Institute  (e-governance)",
      "Host at Laptop Radio",
    ],
    link: "https://www.linkedin.com/in/ziang-ling-195124ab/",
    photo: mich,
  },
  // {
  //   name: "Daniel Lee",
  //   title: "Business Analyst",
  //   experiences: [
  //     "Yale Economics",
  //     "Expert of identifying opportunities for strategic growth and analyzing the market",
  //   ],
  //   link: "https://www.linkedin.com/in/ziang-ling-195124ab/",
  //   photo: dan,
  // },
];

function Team(props) {
  const viewport = useViewportContext();

  const renderProfiles = () => {
    return TEAM_DATA.map((profile, index) => (
      <motion.div
        key={profile.name}
        drag={viewport === "desktopsm" || viewport === "desktop"}
        className="team__card schover:hover"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 * index + 0.5 }}
      >
        <motion.div
          className="team__card__content"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.05 }}
        >
          <img src={profile.photo} />
          <address>{profile.name}</address>
          <p className="team__card__title">{profile.title}</p>
          <p>{profile.experiences.join(", ")}</p>
        </motion.div>
      </motion.div>
    ));
  };
  return (
    <div className={`${props.className} team stndcontainer`}>
      <header>
        <motion.h1 drag>Meet the team</motion.h1>
      </header>
      <div className="team__cards">{renderProfiles()}</div>
    </div>
  );
}

export default React.memo(styled(Team)`
  color: ${(props) => props.theme.text};

  .team__bg {
    height: 400px;
    width: auto;

    ${(props) => props.theme.tabletsm} {
      height: 300px;
      width: auto;
    }
  }

  .Typewriter {
    text-align: start;
  }

  button {
    color: #fff;
  }

  .team__content {
    width: 100%;
    height: 100%;
  }

  p {
    line-height: 24px;
  }

  .team__card__title {
    font-weight: 600;
  }

  address {
    color: #f365bd;
    font-size: 20px;
    margin-top: 24px;
    margin-bottom: 12px;
  }
  h1 {
    font-weight: 700;
    font-size: 60px;
    line-height: 64px;
    /* or 107% */

    letter-spacing: -1.75px;
    margin-bottom: 48px;
  }

  .team__cards {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
    padding-bottom: 36px;
  }

  .team__card__content {
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.cardbg};

    border-radius: 24px;
    padding: 24px;

    img {
      width: 200px;
      height: 200px;
      //   background: #fff;
      //   border-radius: 100px;
    }
  }

  .team__card__content:hover {
    background-color: ${(props) => props.theme.cardbghover};
  }

  .team__card {
    // text-align: start;
    // flex: 1 1 auto;
    width: calc(33.33% - 20px);
    margin-right: 20px;
    margin-bottom: 20px;

    ${(props) => props.theme.tablet} {
      width: calc(50% - 20px);
    }

    ${(props) => props.theme.tabletsm} {
      width: 100%;
      margin-right: 0;
    }
  }
`);

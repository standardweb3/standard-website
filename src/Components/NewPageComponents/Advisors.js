import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import charlie from "assets/images/tpcharlie.png";
import jasper from "assets/images/tpjasper.png";
import march from "assets/images/tpmarch.png";
import momo from "assets/images/tpmomo.png";
import julia from "assets/images/tpjulia.png";
// import lucky from "assets/images/tplucky.png";

import { useViewportContext } from "Components/NewPageComponents/useViewport";

const TEAM_DATA = [
  {
    name: "Charlie Hu",
    title: "Head of Treasury, Head Advisor",
    experiences: [
      "Cofounder of PolkaBase",
      "Partner at CarbonBlue Ventures",
      "Polkadot Ecosystem and Web 3.0 Maestro",
    ],
    description:
      "Charlie is a specialist of Blockchain and related applications. He is the co-founder of PolkaBase with active engagement in Chinese Polkadot community. Charlie has more than 8 years of experience in blockchain industry with emphasis in community building, ecosystem development and growth marketing. He has successfully incubated and supported multiple polkadot projects to into global level.",
    link: "https://www.linkedin.com/in/charlieyechuanhu/",
    photo: charlie,
  },
  {
    name: "Jasper Byun",
    title: "Marketing Advisor",
    experiences: [
      "Founder of Blocksync Ventures",
      "Head of Fintech at Brilliance",
      "Ambassador and strategic advisor to several Polkadot projects",
    ],
    description:
      "over 5 years and has coordinated investments exceeding $50M into world-class distributed technologies project. He has guided advisory portfolios to establish key strategic initiatives by securing partnerships, ensuring proper marketing direction, and encompassing overall day-to-day operations",
    link: "https://www.linkedin.com/in/charlieyechuanhu/",
    photo: jasper,
  },
  {
    name: "Julia Su",
    title: "Strategic Advisor",
    experiences: [
      "Partner at NewTribe Capital",
      "Co-founder of Digitalweek.online",
      "Co-founder and CEO of ECIDE - Eurasian Center of Innovation and Digital Economy",
    ],
    description: "",
    link: "https://www.linkedin.com/in/charlieyechuanhu/",
    photo: julia,
  },
  {
    name: "Momo Xu",
    title: "Marketing Advisor",
    experiences: [
      "Former Administrative Assistant at Google",
      "Top-leader at Nuskin Global Asian market department",
      "Asian market Director of new media operations at Sephora",
      "BD Director at BIKI",
      "Partner at Snapfigers",
    ],
    description: "",
    link: "https://www.linkedin.com/in/charlieyechuanhu/",
    photo: momo,
  },
];

function Advisors(props) {
  const viewport = useViewportContext();

  const renderProfiles = () => {
    return TEAM_DATA.map((profile, index) => (
      <motion.div
        key={profile.name}
        drag={viewport === "desktopsm" || viewport === "desktop"}
        className="advisors__card"
        animate={{ scale: [0.5, 1] }}
        transition={{ duration: 0.5 * index + 0.5 }}
      >
        <motion.div
          className="advisors__card__content"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.05 }}
        >
          <img src={profile.photo} alt={`${profile.name}`} />
          <address>{profile.name}</address>
          <p className="advisors__card__title">{profile.title}</p>
          <p>{profile.experiences.join(", ")}</p>
        </motion.div>
      </motion.div>
    ));
  };
  return (
    <div className={`${props.className} advisors stndcontainer`}>
      <header>
        <motion.h1 drag={viewport === "desktopsm" || viewport === "desktop"}>
          Our Advisors
        </motion.h1>
      </header>
      <div className="advisors__cards">{renderProfiles()}</div>
    </div>
  );
}

export default React.memo(styled(Advisors)`
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

  .advisors__card__title {
    font-weight: 600;
  }

  address {
    color: #f365bd;
    font-size: 20px;
    margin-top: 24px;
    margin-bottom: 12px;
  }

  .advisors__cards {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
    padding-bottom: 36px;
  }

  .advisors__card__content {
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

  .advisors__card__content:hover {
    background-color: ${(props) => props.theme.cardbghover};
  }

  .advisors__card {
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

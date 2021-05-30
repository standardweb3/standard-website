import React from "react";
import styled from "styled-components";
import { Money, Cpu, Workshop } from "grommet-icons";

function Program(props) {
  return (
    <div className={`${props.className} program`}>
      <div className="program__content">
        <div className="program__content__iconheader">
          {props.icon}
          <h3>{props.name}</h3>
        </div>
        <p>{props.desc}</p>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          alt={`${props.name}-link`}
          className=""
        >
          <button>Sign Up</button>
        </a>
      </div>
    </div>
  );
}

const StyledProgram = React.memo(styled(Program)`
  .program__content {
    // display: flex;
    // align-items: center;
    // justify-content: center;
    cursor: pointer;
    margin-bottom: 36px;
    background: ${(props) => props.theme.cardbg};
    border-radius: 24px;
    padding: 24px;
    margin-bottom: 24px;
    transition: all 0.5s ease-out;
    color: #f365bd;
    // text-align: center;

    button {
      font-size: 14px;
      color: #fff;
    }

    svg {
      fill: #f365bd !important;
      stroke: #f365bd !important;
    }

    .program__content__iconheader {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;

      h3 {
        margin-left: 24px;
      }
    }

    &:hover {
      color: #f365bd;
      svg {
        fill: #f365bd !important;
        stroke: #f365bd !important;
      }
      // background: ${(props) => props.theme.textLight};
    }

    p {
      margin: 0;
      font-size: 14px;
      font-weight: 400;
      color: ${(props) => props.theme.text};
    }
  }

  h3 {
    margin: 0;
  }
`);

function Programs(props) {
  const PROGRAMS = [
    {
      name: "Standard Builder Collective",
      link: "http://bit.ly/SBConWebsite",
      icon: <Cpu size="large" color="#fff" />,
      desc: "We are looking for builders who are passionate about decentralized finance. We prefer to work with people who have a burning desire to bridge centralized finance with DeFi. We embrace people who actually build and execute, instead of just coming up with ideas or bluff. We want builders. Join the Standard Builder Collective and be a part of the movement towards a world of open finance.  Apply here.",
    },
    {
      name: "Standard Staker Collective",
      link: "http://bit.ly/SSConWebsite",
      icon: <Money size="large" color="#fff" />,
      desc: "Stakers earn staking rewards for locking their tokens into nodes to help verify transactions on the Proof of Stake  consensus mechanism on the Ethereum blockchain. If you are interested in staking in the Standard ecosystem, please sign up here, and we will send instructions to you when our staking program is ready.",
    },
    {
      name: "Standard Evangelist Collective",
      link: "http://bit.ly/SEConWebsite",
      icon: <Workshop size="large" color="#fff" />,
      desc: "We cannot do it alone. That’s why we need you, our evangelist. Standard Evangelists are people who not only believe in the success of Standard, but also share and transcend their faith in us to those around them. If you “get” our vision, if you want others to make history with us, if you can’t stop talking about us, sharing about us or retweeting our pinned tweets, please do join our Standard Evangelist Collective. Apply here.",
    },
  ];

  return (
    <div className={`${props.className} programs`}>
      {PROGRAMS.map((elem) => (
        <StyledProgram
          key={elem.name}
          name={elem.name}
          icon={elem.icon}
          link={elem.link}
          desc={elem.desc}
        />
      ))}
    </div>
  );
}

export default React.memo(styled(Programs)``);

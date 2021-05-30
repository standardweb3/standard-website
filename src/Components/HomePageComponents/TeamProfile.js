import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

import charlie from "assets/images/tpcharlie.png";
import jay from "assets/images/tpjay.png";
import tony from "assets/images/tptony.png";
import billy from "assets/images/tpbilly.png";
import kang from "assets/images/tpkang.png";
import jasper from "assets/images/tpjasper.png";
import march from "assets/images/tpmarch.png";
import dixon from "assets/images/tpdixon.png";
import momo from "assets/images/tpmomo.png";
import julia from "assets/images/tpjulia.png";
import beli from "assets/images/tpbeli.png";
import mich from "assets/images/tpmich.png";

const useStyles = createUseStyles((Themes) => {
  return {
    teamTitle: {
      fontSize: "50px",
      marginBottom: "48px",
    },
    tpContainer: {
      width: "100%",
      textAlign: "start",
      display: "inline-flex",
      flexWrap: "wrap",
      justifyContent: "center",
      marginBottom: "16px",
    },
    tpTitle: {
      textAlign: "start",
      fontSize: "16px",
      color: "#FF009C",
    },
    tpItem: {
      display: "flex",
      flexDirection: "column",
      width: "25%",
      padding: "24px",
    },
    tpExps: {
      fontSize: "16px",
      color: "#a7a7a7",
    },
    tpHeader: {
      margin: "0",
      fontSize: "16px",
      fontWeight: 600,
      marginTop: "36px",
      marginBottom: "24px",
      textAlign: "start",
    },
    tpDescription: {
      fontSize: "16px",
      textAlign: "start",
    },
    tpImage: {
      position: "relative",
      width: "100%",
      height: "250px",
      objectFit: "cover",
      transition: "all 0.25s ease-out",
      cursor: "default",
      padding: "0 12px",
      "&:hover": {
        transform: "scale(1.1)",
        background: "rgba( 255, 255, 255, 0.25 )",
        backdropFilter: "blur( 4px )",
        borderRadius: "10px",
        // border: "1px solid rgba( 255, 255, 255, 0.18 )",
      },
      //   borderRadius: "50%",
    },
    tpExperiences: {
      fontSize: "16px",
      listStyleType: "korean-hanja-informal",
      width: "100%",
      padding: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center",
      backgroundSize: "40px",
      //   textAlign: "start",
    },
    tpExperiencesHeader: {
      fontWeight: 600,
      margin: "8px 0",
      fontSize: "18px",
    },
    tpBtn: {},
    "@media (max-width: 1200px)": {
      tpItem: {
        width: "33.33%",
      },
    },
    "@media (max-width: 768px)": {
      tpItem: {
        width: "100%",
      },
      tpImage: {
        width: "60%",
        alignSelf: "center",
      },
    },
    "@media (max-width: 576px)": {},
  };
});

const TEAM_DATA = {
  founders: [
    {
      name: "Hyungsuk Kang",
      title: "Founder & CTO",
      experiences: [
        "Software Engineer at Plasm",
        "Head Ambassador for East Asia of Polkadot",
        "Co-founder of PolkaKR",
      ],
      description:
        "Hyungsuk is a software engineer with strong background in Crypto Currency. He is currently a software engineer at Plasm, Head Ambassador for East Asia of Polkadot and the Co-founder at PolkKR. With his versatility from over 5 years of research and development in software industries in cutting edge field, he enjoys challenges in technical problems, and thrives to solve it with the most effective and efficient way.",
      link: "www.linkedin.com/in/hyungsukkang",
      photo: kang,
    },
    {
      name: "Jaewon Shin",
      title: "Co-founder",
      experiences: [
        "Founder of Chiko Media",
        "Co-founder of PolkaKR",
        "Formerly Korean Executive Director at BitBlock Group",
      ],
      description:
        "Jay is an active investor in the Crypto Currency Industry. He is the Co-founder of PolkaKR, Korean Executive Director at BitBlock Capital and President of BTour Chain, Greater China. He graduated with a politics degree at Zhejiang University and is also an active columnist. Jay provides fresh set of eyes in the analysis of businesses using his solid foundations in politics.",
      link: "https://www.linkedin.com/in/jaewon-shin-7911b7194",
      photo: jay,
    },
    {
      name: "Billy Lee",
      title: "Lead Developer",
      experiences: [
        "Software Engineer with over 4 years of experience in full stack web development",
        "Leading UX for Standard Protocol",
      ],
      description:
        "Billy is a software engineer with a solid background in full stack web development. He enjoys utilizing technologies to create a fast and powerful website. He is currently in charge of managing all of Standard’s products and their development. His biggest priority is to provide users with a streamlined experience.",
      link: "https://www.linkedin.com/in/ziang-ling-195124ab/",
      photo: billy,
    },
    {
      name: "Tony Ling",
      title: "Head of China",
      experiences: [
        "Founding partner of Bitblock Capital",
        "Guest lecturer at Zhejiang University",
        "Author of “Unlock the New Cipher, From Blockchain to Crypto”",
      ],
      description: "",
      link: "https://www.linkedin.com/in/ziang-ling-195124ab/",
      photo: tony,
    },
    {
      name: "Dixon Wong",
      title: "Product Owner",
      experiences: [
        "Product Manager in Digital Banking",
        "Former Marketer and Analytics Consultant",
        "Ex TEDx Organiser",
      ],
      description:
        "Tony is an expert in Crypto Currency Industry with a versatile spectrum. He is currently a lecturer at Zhejiang University teaching subjects related to Blockchain and is the author of “Unlock the new cipher, from blockchain to crypto”. He also actively invests in Crypto Currency Industry as the Founding Partner of BitBlock Capital.",
      link: "https://www.linkedin.com/in/ziang-ling-195124ab/",
      photo: dixon,
    },
    {
      name: "Beli Hong",
      title: "Operational Director",
      experiences: [
        "Co-founder of Fiat Capital",
        "Ex-chairman of Zhejiang University Blockchain Association",
        "Operational Director of DeepThinker Capital",
      ],
      description:
        "Tony is an expert in Crypto Currency Industry with a versatile spectrum. He is currently a lecturer at Zhejiang University teaching subjects related to Blockchain and is the author of “Unlock the new cipher, from blockchain to crypto”. He also actively invests in Crypto Currency Industry as the Founding Partner of BitBlock Capital.",
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
      description:
        "Tony is an expert in Crypto Currency Industry with a versatile spectrum. He is currently a lecturer at Zhejiang University teaching subjects related to Blockchain and is the author of “Unlock the new cipher, from blockchain to crypto”. He also actively invests in Crypto Currency Industry as the Founding Partner of BitBlock Capital.",
      link: "https://www.linkedin.com/in/ziang-ling-195124ab/",
      photo: mich,
    },
  ],
  advisors: [
    {
      name: "Charlie Hu",
      title: "Head Advisor",
      experiences: [
        "Partner at CarbonBlue Ventures",
        "Polkadot Ecosystem and Web 3.0 Maestro",
      ],
      description:
        "Charlie is a specialist of Blockchain and related applications. He is the co-founder of PolkaBase with active engagement in Chinese Polkadot community. Charlie has more than 8 years of experience in blockchain industry with emphasis in community building, ecosystem development and growth marketing. He has successfully incubated and supported multiple polkadot projects to into global level.",
      link: "https://www.linkedin.com/in/charlieyechuanhu/",
      photo: charlie,
    },
    {
      name: "March Zheng",
      title: "Global Communications Director",
      experiences: [
        "General Partner at Bizantine Capital",
        "Born and raised in America",
        "Studied at Emory and Washington and Lee",
      ],
      description:
        "over 5 years and has coordinated investments exceeding $50M into world-class distributed technologies project. He has guided advisory portfolios to establish key strategic initiatives by securing partnerships, ensuring proper marketing direction, and encompassing overall day-to-day operations",
      link: "https://www.linkedin.com/in/charlieyechuanhu/",
      photo: march,
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
  ],
};
function TeamProfile(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  const renderProfiles = (part) => {
    return TEAM_DATA[part].map((profile, index) => {
      return (
        <div className={classes.tpItem} key={index}>
          <img src={profile.photo} className={classes.tpImage} alt="profile" />
          <h1 className={classes.tpHeader}>{profile.name}</h1>
          <p className={classes.tpTitle}>{profile.title}</p>
          <p className={classes.tpExps}>{profile.experiences.join(", ")}</p>
          {/*<Collapsible>
            <p className={classes.tpDescription}>{profile.description}</p>
          </Collapsible>*/}
        </div>
      );
    });
  };

  return (
    <>
      <div className="algorithmic">
        <div className={classNames("container")}>
          <h1 className={classes.teamTitle}>Team</h1>
          <div className={classes.tpContainer}>
            {renderProfiles("founders")}
          </div>
        </div>
      </div>
      <div className="permissionless">
        <div className={classNames("container")}>
          <h1 className={classes.teamTitle}>Advisors</h1>
          <div className={classes.tpContainer}>
            {renderProfiles("advisors")}
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamProfile;

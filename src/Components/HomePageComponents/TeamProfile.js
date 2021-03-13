import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

import charlie from "assets/images/tpcharlie.png";
import jay from "assets/images/tpjay.png";
import tony from "assets/images/tptony.png";
import billy from "assets/images/tpbilly.png";
import kang from "assets/images/tpkang.png";

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
      width: "300px",
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
      cursor: "pointer",
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
        width: "50%",
      },
    },
    "@media (max-width: 768px)": {
      tpItem: {
        width: "100%",
      },
      tpImage: {
        width: "80%",
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
        "Head ambassador for East Asia of Polkadot",
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
        "President of BTour Chain, Greater China",
        "Ex Korean Executive Director at BitBlock Group",
      ],
      description:
        "Jay is an active investor in the Crypto Currency Industry. He is the Co-founder of PolkaKR, Korean Executive Director at BitBlock Capital and President of BTour Chain, Greater China. He graduated with a politics degree at Zhejiang University and is also an active columnist. Jay provides fresh set of eyes in the analysis of businesses using his solid foundations in politics.",
      link: "https://www.linkedin.com/in/jaewon-shin-7911b7194",
      photo: jay,
    },
  ],
  team: [
    {
      name: "Billy Lee",
      title: "Lead Developer",
      experiences: [
        "Software Engineer with over 4 years of working experience in full stack web development",
        "In charge of Standard's UI",
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
        "Author of “Unlock the new cipher, from blockchain to crypto”",
      ],
      description:
        "Tony is an expert in Crypto Currency Industry with a versatile spectrum. He is currently a lecturer at Zhejiang University teaching subjects related to Blockchain and is the author of “Unlock the new cipher, from blockchain to crypto”. He also actively invests in Crypto Currency Industry as the Founding Partner of BitBlock Capital.",
      link: "https://www.linkedin.com/in/ziang-ling-195124ab/",
      photo: tony,
    },
  ],
  advisors: [
    {
      name: "Charlie Hu",
      title: "Head Advisor",
      experiences: [
        "Cofounder of PolkaBase",
        "Managing partner at Candaq",
        "Expert of Polkadot Ecosystem and Web 3.0",
      ],
      description:
        "Charlie is a specialist of Blockchain and related applications. He is the co-founder of PolkaBase with active engagement in Chinese Polkadot community. Charlie has more than 8 years of experience in blockchain industry with emphasis in community building, ecosystem development and growth marketing. He has successfully incubated and supported multiple polkadot projects to into global level.",
      link: "https://www.linkedin.com/in/charlieyechuanhu/",
      photo: charlie,
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
    <div className="algorithmic">
      <div className={classNames("container")}>
        <h1 className={classes.teamTitle}>Team</h1>
        <div className={classes.tpContainer}>{renderProfiles("founders")}</div>
        <div className={classes.tpContainer}>{renderProfiles("team")}</div>
        <div className={classes.tpContainer}>{renderProfiles("advisors")}</div>
      </div>
    </div>
  );
}

export default TeamProfile;

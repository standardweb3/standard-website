import { createUseStyles, useTheme } from "react-jss";
// import classNames from "classnames";

// Components
import Header from "Components/HomePageComponents/Header";
import Main from "Components/HomePageComponents/Main";
import Meet from "Components/HomePageComponents/Meet";
import Backers from "Components/HomePageComponents/Backers";
import Liquidation from "Components/HomePageComponents/Liquidation";
import Leverage from "Components/HomePageComponents/Leverage";
import TeamProfile from "Components/HomePageComponents/TeamProfile";
import LearnMore from "Components/HomePageComponents/LearnMore";
import Footer from "Components/HomePageComponents/Footer";

const useStyles = createUseStyles((Themes) => {
  return {
    mainContainer: {
      backgroundColor: "#08091c",
      color: "#fff",
      lineHeight: 1.4,
      fontFamily: "Hind",
    },
  };
});

function HomePage(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <main className={classes.mainContainer}>
      <Header />
      <Main />
      <Backers />
      <Meet />
      <Leverage />
      <Liquidation />
      <TeamProfile />
      <LearnMore />
      <Footer />
    </main>
  );
}

export default HomePage;

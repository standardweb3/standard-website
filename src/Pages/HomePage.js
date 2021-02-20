import { createUseStyles, useTheme } from "react-jss";
// import classNames from "classnames";

// Components
import Header from "Components/HomePageComponents/Header";
import Main from "Components/HomePageComponents/Main";
import Meet from "Components/HomePageComponents/Meet";
import Backers from "Components/HomePageComponents/Backers";
import Liquidation from "Components/HomePageComponents/Liquidation";
import Leverage from "Components/HomePageComponents/Leverage";
import Value from "Components/HomePageComponents/Value";
import LearnMore from "Components/HomePageComponents/LearnMore";
import Footer from "Components/HomePageComponents/Footer";

const useStyles = createUseStyles((Themes) => {
  return {};
});

function HomePage(props) {
  const theme = useTheme();
  //   console.log({ ...props, theme });
  const classes = useStyles({ props, theme });

  return (
    <div className={{}}>
      <main>
        <Header />
        <Main />
        <Backers />
        <Meet />
        <Leverage />
        <Liquidation />
        <Value />
        <LearnMore />
        <Footer />
      </main>
    </div>
  );
}

export default HomePage;

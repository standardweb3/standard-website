import { createUseStyles, useTheme } from "react-jss";
// import classNames from "classnames";
import onepager from "assets/images/onepager.png";

const useStyles = createUseStyles((Themes) => {
  return {};
});

function HomePage(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <div className={{}}>
      <main>
        <img src={onepager} />
      </main>
    </div>
  );
}

export default HomePage;

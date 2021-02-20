import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles((Themes) => {
  return {
    backed: {},
  };
});

function Backers(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <section className={classNames("backedSection", classes.backed)}>
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 backedSection-BG">
            <h3 className="title mid-padding-y ">Backed by</h3>
            <div className="row">
              <img
                className="back-icon"
                src="https://dummyimage.com/400x400/000/d30e0e"
                alt="temp"
              />
              <img
                className="back-icon"
                src="https://dummyimage.com/400x400/000/d30e0e"
                alt="temp"
              />
              <img
                className="back-icon"
                src="https://dummyimage.com/400x400/000/d30e0e"
                alt="temp"
              />
              <img
                className="back-icon"
                src="https://dummyimage.com/400x400/000/d30e0e"
                alt="temp"
              />
              <img
                className="back-icon"
                src="https://dummyimage.com/400x400/000/d30e0e"
                alt="temp"
              />
              <img
                className="back-icon"
                src="https://dummyimage.com/400x400/000/d30e0e"
                alt="temp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Backers;

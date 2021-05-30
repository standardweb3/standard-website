import { createUseStyles, useTheme } from "react-jss";
// import classNames from "classnames";

const useStyles = createUseStyles((Themes) => {
  return {
    img: {
      objectFit: "contain",
      width: "120px",
      height: "72px",
    },
  };
});

function Image(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <div
      className={{}}
      style={{
        width: "40px",
        height: "40px",
        position: "absolute",
        top: props.top,
        left: props.left,
      }}
    >
      <img src={props.image} className={classes.img} />
    </div>
  );
}

export default Image;

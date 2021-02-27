import { useState, useEffect } from "react";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

import standardLogo from "assets/images/standard-logo.png";

const useStyles = createUseStyles((Themes) => {
  return {
    menu_dt: {
      display: "flex",
      // padding: "2rem",
    },
    logo_img: {
      maxWidth: "200px",
      maxHeight: "100px",
      width: "auto",
      height: "auto",
    },
    logo: {
      flex: "1 1 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    menu_list: {
      listStyleType: "none",
      display: "flex",
    },
    menu_item: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1rem",
    },
    enter_app_btn: {
      paddingLeft: "2rem",
      paddingRight: "2rem",
      marginLeft: "2rem",
    },
    menu_item_a: {
      color: "#fff",
    },
    menu_mb_cont: {
      display: "none",
      // position: "relative",
    },
    menu_mb: {
      height: "100%",
      backgroundColor: "rgba(8, 9, 29, 0.95)",
      width: "100%",
      position: "absolute",
      top: 0,
      left: "-100%",
      transition: "all 1s ease-out",
      zIndex: 1,
      paddingTop: "65px",
    },
    menu_mb_show: {
      left: 0,
    },
    nav_trigger: {
      position: "absolute",
      zIndex: 2,
    },
    ["m-menuitem"]: {
      transition: "0.5s",
    },
    ["m-menuitem-open"]: {
      transform: "translate(0px, 0px)",
      opacity: 1,
      visibility: "inherit",
    },
    ["m-menuitem-closed"]: {
      transform: "translate(0px, 20px)",
      opacity: 0,
      visibility: "hidden",
    },
    "@media (max-width: 1200px)": {},
    "@media (max-width: 992px)": {
      menu_mb_cont: {
        display: "block",
      },
      menu_list: {
        flexDirection: "column",
      },
      menu_item: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        margin: "1rem 0",
        fontSize: "2rem",
      },
      menu_dt: {
        display: "none",
      },
      enter_app_btn: {
        marginTop: "3rem",
      },
    },
    "@media (max-width: 768px)": {},
    "@media (max-width: 576px)": {},
  };
});

function Header(props) {
  const [animateItem, setAnimateItem] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  const menuItems = ["Standard Protocol", "Forum", "Communities", "Docs"];

  const toggleMenu = () => {
    if (!open) {
      clearTimeout(modalItemAnimate);
      toggleOpen();
      setTimeout(modalItemAnimate, 1000);
    } else {
      clearTimeout(toggleOpen);
      modalItemAnimate();
      setTimeout(toggleOpen, 1000);
    }
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  const modalItemAnimate = () => {
    setAnimateItem(!animateItem);
  };

  const renderMenuItems = () => {
    return menuItems.map((item, index) => {
      return (
        <li
          key={`${item}-${index}`}
          style={{ transitionDelay: `${0.1 * index}s` }}
          className={classNames(classes.menu_item, classes["m-menuitem"], {
            [classes["m-menuitem-open"]]: animateItem,
            [classes["m-menuitem-closed"]]: !animateItem,
          })}
        >
          <a href="#" className={classes.menu_item_a} id="Forum">
            {item}
          </a>
        </li>
      );
    });
  };
  return (
    <div className={classNames("container")}>
      <div className={classes.menu_dt}>
        <div className={classNames("logo", classes.logo)}>
          <a href="#" className={classes.menu_item_a}>
            <img src={standardLogo} alt="logo" className={classes.logo_img} />
          </a>
        </div>
        <div
          id="mainListDiv"
          className={classNames("main_list", { show_list: open })}
        >
          <ul className={classNames("navlinks", classes.menu_list)}>
            {renderMenuItems()}
            <li>
              <a
                className={classNames("effect-btn-one", classes.enter_app_btn)}
                href="#"
                alt="Blank"
                target="_blank"
              >
                Enter App
              </a>
            </li>
          </ul>
          <div className="nav_backdrop_bg"></div>
        </div>
      </div>
      <span
        className={classNames("navTrigger", classes.nav_trigger, {
          active: open,
        })}
        onClick={toggleMenu}
      >
        <i></i>
        <i></i>
        <i></i>
      </span>
      <div className={classes.menu_mb_cont}>
        <div className={classNames("logo")}>
          <a href="#" className={classes.menu_item_a}>
            <img src={standardLogo} alt="logo" className={classes.logo_img} />
          </a>
        </div>
        <div
          className={classNames(classes.menu_mb, {
            [classes.menu_mb_show]: open,
          })}
        >
          <ul className={classNames("navlinks", classes.menu_list)}>
            {renderMenuItems()}
            <li>
              <a
                style={{ transitionDelay: `${0.5}s` }}
                className={classNames(
                  "effect-btn-one",
                  classes.enter_app_btn,
                  classes["m-menuitem"],
                  {
                    [classes["m-menuitem-open"]]: animateItem,
                    [classes["m-menuitem-closed"]]: !animateItem,
                  }
                )}
                href="#"
                alt="Blank"
                target="_blank"
              >
                Enter App
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

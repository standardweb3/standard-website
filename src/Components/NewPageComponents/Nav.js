import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import logo from 'assets/images/standard-logo.png';
import logo_dark from 'assets/images/standard-logo-navy.png';
import menu from 'assets/images/new/menu.png';

import { useThemeContext } from 'Components/NewPageComponents/useTheme';

const ITEMS = [
  'Home',
  'About',
  'Offerings',
  'Tokenomics',
  'Ecosystem',
  'Team',
  'Advisors',
  'Roadmap',
  'Partners',
];

function Nav(props) {
  const theme = useThemeContext();
  const [open, setOpen] = useState(false);

  return (
    <nav className={props.className}>
      <img
        src={theme === 'dark' ? logo : logo_dark}
        onClick={() => {
          props.goto(0);
        }}
      />
      <ul className="nav__dt">
        {ITEMS.map((item, index) => {
          return (
            <li
              className="nav__dt__li"
              key={item}
              onClick={() => {
                props.goto(index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <img
        className="nav__menuimage"
        onClick={() => {
          setOpen(true);
        }}
        src={menu}
      />
      {open && (
        <ul
          className="nav__mb"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setOpen(false);
          }}
        >
          {ITEMS.map((item, index) => {
            return (
              <motion.li
                key={`mb${item}`}
                className="nav__mb__li"
                animate={{ x: ['-100vw', '0vw'] }}
                transition={{ duration: index * 0.2 }}
                key={item}
                onClick={() => {
                  props.goto(index);
                }}  
              >
                {item}
              </motion.li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

export default React.memo(styled(Nav)`
  width: 100%;
  position: fixed;
  display: flex;
  color: ${(props) => props.theme.text};
  padding: 36px;
  z-index: 300;
  animation fadein 1.5s forwards;
  align-items: center;
  justify-content: flex-start;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .nav__menuimage {
    width: 65px;
    margin-left:auto;
    margin-right:0;
    display: none;
    ${(props) => props.theme.desktopsm} {
      display: block;
    }
  }

  ul {
    list-style-type: none;
  }

  .nav__dt {
    flex: 1 1 0;
    display: flex;
    justify-content: flex-end;
    align-item: center;
    font-weight: 500;
    

    ${(props) => props.theme.desktopsm} {
      display: none;
    }
  }

  .nav__dt__li {
    cursor: pointer;
    padding: 0 12px;
  }

  .nav__mb {
    animation: fadein 1s forwards;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${(props) => props.theme.mbnavbg};
    z-index: 308;
    padding: 0;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    overflow-y: scroll;
  }

  .nav__mb__li {
    cursor: pointer;
    margin: 24px auto;
    color: ${(props) => props.theme.mbnavtxt};
    // text-shadow: 1px 1px 2px black;
    display: inline-block;
    padding: 0;
    font-size: 24px;
    font-weight: 700;

    ${(props) => props.theme.mobile} {
      font-size: 16px;
      margin: 12px auto;
    }

  }

  img {
    width: 150px;
    cursor: pointer;
  }
`);

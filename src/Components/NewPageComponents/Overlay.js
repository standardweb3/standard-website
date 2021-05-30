import React, { useMemo } from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";
import Programs from "./Programs";

import logo from "assets/images/standard-logo.png";

function Overlay(props) {
  const particlesInit = (main) => {};
  const particlesLoaded = (container) => {};

  const confetti = useMemo(
    () => (
      <Particles
        className="overlay__confetti"
        id="tsparticles--confetti"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 30,
          backgroundMode: {
            enable: true,
            zIndex: 10,
          },
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ["#C6137F", "#F365BD", "#31A6F4", "#94D4FF"],
            },
            destroy: {
              mode: "split",
              split: {
                count: 1,
                factor: {
                  value: 9,
                  random: {
                    enable: true,
                    minimumValue: 4,
                  },
                },
                rate: {
                  value: 10,
                  random: {
                    enable: true,
                    minimumValue: 5,
                  },
                },
                particles: {
                  collisions: {
                    enable: false,
                  },
                  destroy: {
                    mode: "none",
                  },
                  life: {
                    count: 1,
                    duration: {
                      value: 1,
                    },
                  },
                },
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                sides: 5,
              },
              image: {
                src: "https://cdn.matteobruni.it/images/particles/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: false,
              animation: {
                enable: false,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: 15,
              random: {
                enable: true,
                minimumValue: 10,
              },
              animation: {
                enable: false,
                speed: 40,
                minimumValue: 0.1,
                sync: false,
              },
            },
            lineLinked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            collisions: {
              enable: true,
              mode: "destroy",
            },
            move: {
              enable: true,
              speed: 7,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          detectRetina: true,
        }}
      />
    ),
    []
  );
  return (
    <div className={`${props.className}`} onClick={props.close}>
      <div className="overlay__content">
        <img className="overlay__logos_logo" src={logo} />
        <h1>
          Join Standard Protocol's <br />
          Community Collective
        </h1>
        <Programs />
      </div>
    </div>
  );
}

export default React.memo(styled(Overlay)`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 302;
  padding-top: 50px;
  color: #fff;
  overflow-y: scroll;

  ${(props) => props.theme.mobile} {
    padding-top: 25px;
  }

  button {
    border-radius: 12px;
    outline: none;
    border: 0;
    background-color: #31A6F4;
  }

  .overlay__content {
    position: absolute;
    z-index: 400;
    left: 50%;
    transform: translateX(-50%);
    animation fadein 1.5s forwards;
    padding-bottom: 100px;
    max-width: 700px;

    ${(props) => props.theme.desktopsm} {
      max-width: none;
    }


    ${(props) => props.theme.tablet} {
      width: 80%;
      padding: 0 10%;
    }

    ${(props) => props.theme.tabletsm} {
      width: 100%;
      padding: 0 10%;
    }
  }

  h1 {
    margin-top: 48px !important;
    font-size: 48px !important;

    ${(props) => props.theme.tabletsm} {
      font-size: 36px !important;
      line-height: 36px !important;
    }


    ${(props) => props.theme.mobile} {
      font-size: 32px !important;
      line-height: 32px !important;
    }

    text-align:center !important;
  }

  img {
    width: 300px;
    ${(props) => props.theme.tablet} {
      width: 200px;
    }
  }

  a {
    color: #fff;
    font-weight: 700;
    z-index: 306;
    font-size: 50px;
    margin: 0;
    cursor: pointer;
    text-decoration: none;
    ${(props) => props.theme.tablet} {
      font-size: 36px;
    }
  }

  .overlay__confetti {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  h3 {
    // margin-bottom: 36px;

    ${(props) => props.theme.mobile} {
      font-size: 18px;
    }
  }
`);

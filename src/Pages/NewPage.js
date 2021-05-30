import React, { useEffect, useState, useRef, useMemo } from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";

import Home from "Components/NewPageComponents/Home";
import About from "Components/NewPageComponents/About";
import Offerings from "Components/NewPageComponents/Offerings";
import Tokens from "Components/NewPageComponents/Tokens";
import Ecosystem from "Components/NewPageComponents/Ecosystem";
import Team from "Components/NewPageComponents/Team";
import Advisors from "Components/NewPageComponents/Advisors";
import Partners from "Components/NewPageComponents/Partners";
import Roadmap from "Components/NewPageComponents/Roadmap";
import Overlay from "Components/NewPageComponents/Overlay";
import Community from "Components/NewPageComponents/Community";
import Section from "Components/NewPageComponents/Section";

import BGA from "Components/NewPageComponents/Bga";
import { useThemeContext } from "Components/NewPageComponents/useTheme";
import Reset from "Components/NewPageComponents/Reset";

import Nav from "Components/NewPageComponents/Nav";
import RotKickIn from "Components/NewPageComponents/RotKickIn";
// import bghome from "assets/images/0.png";
import bghome from "assets/images/new/bghome.png";
import bgofferings from "assets/images/new/bgofferings.png";
import bgecosystem from "assets/images/new/bgecosystem.png";
import { useViewportContext } from "Components/NewPageComponents/useViewport";

function NewPage(props) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [index, setIndex] = useState(0);
  const [outPhase, setOutPhase] = useState(false);
  const outPhaseTimer = useRef(null);
  const theme = useThemeContext();
  const scrollRef = useRef(null);

  const [reloader, updateReloader] = React.useState(false);
  const viewport = useViewportContext();

  const particlesInit = (main) => {};

  const particlesLoaded = (container) => {};

  const CHILDREN = [
    <Section>
      <div className="newpage__bg newpage__bg--center home__bg">
        <img alt="bghome" src={bghome} />
      </div>
      <Home />
    </Section>,
    <Section>
      <About />
    </Section>,
    <Section>
      <div className="newpage__bg newpage__bg--end">
        <img alt="bgofferings" src={bgofferings} style={{ width: "1200px" }} />
      </div>
      <Offerings />
    </Section>,
    <Section>
      <Tokens />
    </Section>,
    <Section>
      <div className="newpage__bg newpage__bg--end">
        <img alt="bgeco" src={bgecosystem} />
      </div>
      <Ecosystem />
    </Section>,
    <Section>
      <Team />
    </Section>,
    <Section>
      <Advisors />
    </Section>,
    <Section>
      <Roadmap />
    </Section>,
    <Section>
      <Partners />
    </Section>,
    <Section>
      <Community />
    </Section>,
  ];

  const getChildren = () => {
    if (outPhase) {
      return (
        <RotKickIn out={true} key={`${index}${reloader}`}>
          {CHILDREN[index]}
        </RotKickIn>
      );
    }

    return (
      <RotKickIn out={false} key={`${index}${reloader}`}>
        {CHILDREN[index]}
      </RotKickIn>
    );
  };

  useEffect(() => {
    return () => {
      clearTimeout(outPhaseTimer.current);
    };
  }, []);

  // const scroll = (right = true) => {
  //   setOutPhase(true);
  //   let nextIndex;
  //   if (right) {
  //     if (index + 1 === MAX) nextIndex = 0;
  //     else nextIndex = index + 1;
  //   } else {
  //     if (index - 1 === -1) nextIndex = MAX - 1;
  //     else nextIndex = index - 1;
  //   }
  //   clearTimeout(outPhaseTimer.current);
  //   outPhaseTimer.current = setTimeout(() => {
  //     setOutPhase(false);
  //     setIndex(nextIndex);
  //   }, 1500);
  // };

  const goto = (num) => {
    if (index === num) return;
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setOutPhase(true);
    clearTimeout(outPhaseTimer.current);
    outPhaseTimer.current = setTimeout(() => {
      setOutPhase(false);
      setIndex(num);
    }, 1200);
  };

  const bga = useMemo(() => <BGA />, []);

  const bg = useMemo(
    () => (
      <Particles
        className="newpage__particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 30,
          particles: {
            color: { value: theme === "dark" ? "#fff" : "#000" },
            line_linked: {
              color: theme === "dark" ? "#fff" : "#000",
              distance: 150,
              enable: false,
              opacity: 0.4,
              width: 1,
            },
            move: {
              attract: { enable: false, rotateX: 600, rotateY: 600 },
              bounce: false,
              direction: "none",
              enable: true,
              out_mode: "out",
              random: true,
              speed: 0.3,
              straight: false,
            },
            number: { density: { enable: true, value_area: 1000 }, value: 300 },
            opacity: {
              anim: { enable: true, opacity_min: 0.3, speed: 5, sync: false },
              random: {
                enable: true,
                minimumValue: 0.3,
              },
              value: 0.6,
            },
            shape: {
              type: "circle",
            },
            size: {
              anim: { enable: false, size_min: 0.3, speed: 4, sync: false },
              random: false,
              value: 1,
            },
          },
          retina_detect: true,
        }}
      />
    ),
    [theme]
  );

  return (
    <main className={`${props.className}`}>
      <div ref={scrollRef} />
      {showOverlay && <Overlay close={() => setShowOverlay(false)} />}
      {bga}
      {bg}
      {(viewport === "desktopsm" || viewport === "desktop") && (
        <Reset
          onClick={() => {
            if (!outPhase) updateReloader(!reloader);
          }}
        />
      )}
      {!outPhase && <Nav goto={goto} />}

      {getChildren()}
    </main>
  );
}

export default React.memo(styled(NewPage)`
  // user-select: none;
  position: relative;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scalein {
    from {
      transform: scale(0.75);
    }
    to {
      transform: scale(1);
    }
  }

  .newpage__particles {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  overflow-x: hidden;
  img,
  a {
    user-drag: none;
    user-select: none;
  }
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  font-family: Poppins;

  .waiting {
    opacity: 0;
    transform: none;
  }

  .kick-in {
    transition: 0.5s all ease-out;
    transform: rotateZ(0);
    opacity: 100%;
  }

  .rot-out {
    transition: 0.6s all;
    transform: perspective(5000px) rotateZ(-30deg) scale(0.75);
  }

  .kick-out {
    transform: perspective(5000px) rotateZ(-30deg) translateX(150vw) scale(0.75);

    @media screen and (max-width: 992px) {
      transform: perspective(5000px) rotateZ(-30deg) translateX(200vw)
        scale(0.75);
    }

    @media screen and (max-width: 768px) {
    }

    @media screen and (max-width: 480px) {
      transform: perspective(5000px) rotateZ(-30deg) translateX(250vw)
        scale(0.75);
    }
  }

  .newpage__bg--end {
    justify-content: flex-end;
    align-items: center;
  }

  .home__bg {
    transform: translateX(10%);
    ${(props) => props.theme.tablet} {
      transform: translateX(0%);
    }
    ${(props) => props.theme.tablet} {
      // transform: translateX(0%);
      transform: translateY(10%);
    }
  }

  .newpage__bg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    display: flex;

    img {
      max-width: 100%;
      width: 800px;
      height: auto;
    }

    @media screen and (max-width: 992px) {
    }

    @media screen and (max-width: 768px) {
    }
  }

  .newpage__bg--left {
    justify-content: flex-start;
  }

  .newpage__bg--center {
    justify-content: center;
    align-items: flex-start;
  }

  .newpage__nav {
    z-index: 1;
    position: relative;
  }

  .newpage__section {
    animation: 0.6s scalein forwards ease-out;
  }

  .newpage__sectioncard {
    padding: 20px;
    box-sizing: border-box;
    height: 100%;
  }

  button {
    outline: none;
    padding: 12px 24px;
    box-sizing: border-box;
  }

  // move to global style with nesting
  .btn--highlight {
    background: #c6137f;
    backdrop-filter: blur(14px);
    border-radius: 100px;
    min-height: 50px;
    color: #fff;
    font-weight: 700;
    border: 0;
  }

  .btn--opac {
    background: linear-gradient(
        154.49deg,
        rgba(121, 117, 131, 0.2) 5.35%,
        rgba(54, 53, 103, 0.2) 83.85%
      ),
      rgba(49, 48, 54, 0.3);
    border-radius: 100px;
    border: 1px solid #ffffff;
    backdrop-filter: blur(14px);
    color: #fff;
    min-height: 50px;
    min-width: 100px;
    font-weight: 700;
    font-size: 14px;
  }

  .btn--social {
    height: 50px;
    width: 50px;
    background: linear-gradient(
        154.49deg,
        rgba(121, 117, 131, 0.2) 5.35%,
        rgba(54, 53, 103, 0.2) 83.85%
      ),
      rgba(49, 48, 54, 0.3);
    border: 1px solid #ffffff;
    box-sizing: border-box;
    backdrop-filter: blur(14px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 100px;
  }

  header {
    text-align: start;
  }

  h1 {
    font-weight: 700;
    font-size: 60px;
    line-height: 64px;
    /* or 107% */

    letter-spacing: -1.75px;
    text-align: start;
    margin-bottom: 48px;
    margin-top: 0;

    ${(props) => props.theme.tabletsm} {
      font-size: 48px;
    }

    ${(props) => props.theme.tabletsm} {
      font-size: 42px;
    }
  }

  .--schover:hover,
  --schover:active {
    transform: scale(1.05);
    background-color: #000;
    transition: 0.5s all;
  }
`);

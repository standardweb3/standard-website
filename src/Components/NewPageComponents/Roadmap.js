import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useViewportContext } from "Components/NewPageComponents/useViewport";

import mtrgl from "assets/images/new/mtr.png";
import ltrgl from "assets/images/new/ltr.png";
import stndgl from "assets/images/new/stnd.png";

function Roadmap(props) {
  const viewport = useViewportContext();

  return (
    <div className={`${props.className} roadmap stndcontainer`}>
      <header>
        <motion.h1 drag={viewport === "desktopsm" || viewport === "desktop"}>
          Our Journey
        </motion.h1>
      </header>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{
            borderRadius: "12px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #F365BD" }}
          iconStyle={{
            background: "#000",
            borderColor: "#000",
            color: "#fff",
          }}
          icon={
            <motion.img
              drag={viewport === "desktopsm" || viewport === "desktop"}
              src={mtrgl}
            />
          }
        >
          <motion.h3
            drag={viewport === "desktopsm" || viewport === "desktop"}
            className="vertical-timeline-element-title"
          >
            2021 Q1
          </motion.h3>
          <motion.p drag={viewport === "desktopsm" || viewport === "desktop"}>
            Oracle Module Integration,
            <br />
            Council Recruit
          </motion.p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{
            borderRadius: "12px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #F365BD" }}
          iconStyle={{
            background: "#000",
            borderColor: "#000",
            color: "#fff",
          }}
          icon={
            <motion.img
              drag={viewport === "desktopsm" || viewport === "desktop"}
              src={ltrgl}
            />
          }
        >
          <motion.h3
            drag={viewport === "desktopsm" || viewport === "desktop"}
            className="vertical-timeline-element-title"
          >
            2021 Q2
          </motion.h3>
          <motion.p drag={viewport === "desktopsm" || viewport === "desktop"}>
            Kusama parachain crowdloan,
            <br />
            Chainbridge test run on Kusama,
            <br />
            Run 1st Council
            <br />
            Yield farming starts
          </motion.p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{
            borderRadius: "12px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #F365BD" }}
          iconStyle={{
            background: "#000",
            borderColor: "#000",
            color: "#fff",
          }}
          icon={
            <motion.img
              drag={viewport === "desktopsm" || viewport === "desktop"}
              src={stndgl}
            />
          }
        >
          <motion.h3
            drag={viewport === "desktopsm" || viewport === "desktop"}
            className="vertical-timeline-element-title"
          >
            2021 Q3
          </motion.h3>
          <motion.p drag={viewport === "desktopsm" || viewport === "desktop"}>
            Polkadot parachain crowdloan
          </motion.p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{
            borderRadius: "12px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #F365BD" }}
          iconStyle={{
            background: "#000",
            borderColor: "#000",
            color: "#fff",
          }}
          icon={
            <motion.img
              drag={viewport === "desktopsm" || viewport === "desktop"}
              src={mtrgl}
            />
          }
        >
          <motion.h3
            drag={viewport === "desktopsm" || viewport === "desktop"}
            className="vertical-timeline-element-title"
          >
            2021 Q4
          </motion.h3>
          <motion.p drag={viewport === "desktopsm" || viewport === "desktop"}>
            Yield farming starts if Polkadot parachain is connected
            <br />
            Apply Standard Protocol to other ecosystems (Cosmos, ethereum, etc.)
          </motion.p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{
            borderRadius: "12px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #F365BD" }}
          iconStyle={{
            background: "#000",
            borderColor: "#000",
            color: "#fff",
          }}
          icon={
            <motion.img
              drag={viewport === "desktopsm" || viewport === "desktop"}
              src={ltrgl}
            />
          }
        >
          <motion.h3
            drag={viewport === "desktopsm" || viewport === "desktop"}
            className="vertical-timeline-element-title"
          >
            Join our journey
          </motion.h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{
            borderRadius: "12px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #F365BD" }}
          iconStyle={{
            background: "#000",
            borderColor: "#000",
            color: "#fff",
          }}
          icon={
            <motion.img
              drag={viewport === "desktopsm" || viewport === "desktop"}
              src={stndgl}
            />
          }
        >
          <motion.h3
            drag={viewport === "desktopsm" || viewport === "desktop"}
            className="vertical-timeline-element-title"
          >
            It will be awesome
          </motion.h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{
            borderRadius: "12px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #F365BD" }}
          iconStyle={{
            background: "#000",
            borderColor: "#000",
            color: "#fff",
          }}
          icon={
            <motion.img
              drag={viewport === "desktopsm" || viewport === "desktop"}
              src={mtrgl}
            />
          }
        >
          <motion.h3
            drag={viewport === "desktopsm" || viewport === "desktop"}
            className="vertical-timeline-element-title"
          >
            Together, always better!
          </motion.h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "transparent" }}
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={
            <motion.img
              drag={viewport === "desktopsm" || viewport === "desktop"}
              src={ltrgl}
            />
          }
        />
      </VerticalTimeline>
    </div>
  );
}

export default React.memo(styled(Roadmap)`
  color: ${(props) => props.theme.text};

  .vertical-timeline-element-content {
    background-color: ${(props) => props.theme.cardbg};
  }

  .Typewriter {
    text-align: start;
  }

  button {
    color: #fff;
  }

  h3 {
    color: #f365bd;
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }
`);

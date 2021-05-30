import React, { useState, useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useViewportContext } from "Components/NewPageComponents/useViewport";

import bga1 from "assets/images/new/bga1.gif";
import bga2 from "assets/images/new/bga2.gif";
import bga3 from "assets/images/new/bga3.gif";
import bga4 from "assets/images/new/bga4.gif";
import bga5 from "assets/images/new/bga5.gif";
import bga6 from "assets/images/new/bga6.gif";

const randomInteger = (minimum = 0, maximum) => {
  if (maximum === undefined) {
    maximum = minimum;
    minimum = 0;
  }

  if (typeof minimum !== "number" || typeof maximum !== "number") {
    throw new TypeError("Expected all arguments to be numbers");
  }

  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

function BGA(props) {
  const viewport = useViewportContext();
  const [spawn, setSpawn] = useState(2);
  const [indices, setIndices] = useState([
    randomInteger(0, 2),
    randomInteger(3, 5),
  ]);
  const spawnRef = useRef(null);

  const BGAS = [bga1, bga2, bga3, bga4, bga5, bga6];

  //   const spawnRef = useRef(null);
  //   const indicesRef = useRef(null);

  useEffect(() => {
    clearTimeout(spawnRef.current);
    spawnRef.current = setTimeout(
      () => {
        const newSpawn = randomInteger(1, 2);
        setSpawn(newSpawn == spawn ? newSpawn + 1 : newSpawn);
      },
      viewport === "mobile"
        ? 8000
        : viewport === "tablet"
        ? 10000
        : viewport === "desktopsm"
        ? 14000
        : 18000
    );
    return () => {
      clearTimeout(spawnRef.current);
    };
  }, [spawn]);

  useEffect(() => {
    const newIndices = [];
    for (let i = 0; i < spawn; i++) {
      newIndices.push(randomInteger(0, 5));
    }
    setIndices(newIndices);
  }, [spawn]);

  const runners = useMemo(() => {
    return indices.map((index, rIndex) => {
      const left = rIndex % 2 === 0 ? true : false;
      return (
        <motion.img
          key={`${BGAS[index]}${spawn}${rIndex}`}
          style={{
            width: `${randomInteger(150, 300)}px`,
            y: `${randomInteger(0, 80)}%`,
            x: left ? "-100vw" : "100vw",
          }}
          src={BGAS[index]}
          animate={{
            x: left ? "100vw" : "-100vw",
          }}
          transition={{
            duration:
              viewport === "mobile"
                ? randomInteger(6, 10)
                : viewport === "tablet"
                ? randomInteger(8, 12)
                : viewport === "desktopsm"
                ? randomInteger(12, 16)
                : randomInteger(16, 20),
          }}
        />
      );
    });
  }, [indices]);

  return <div className={`${props.className} BGA`}>{runners}</div>;
}

export default React.memo(styled(BGA)`
  width: 100%;
  height: 100%;
  position: absolute;
  img {
    height: auto;
    opacity: 0.5;
  }
`);

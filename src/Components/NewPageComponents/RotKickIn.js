import React, { useEffect, useState, useRef, useMemo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import frog from "assets/images/new/frog.gif";

function RotKickIn(props) {
  const { out } = props;
  const [index, setIndex] = useState(0);
  const [rot, setRot] = useState(false);
  const [kickout, setKo] = useState(false);
  const [kickin, setKi] = useState(false);
  const rotTimerRef = useRef(null);
  const outTimerRef = useRef(null);
  const inTimerRef = useRef(null);
  const MAX = 5;

  useEffect(() => {
    return () => {
      clearTimeout(inTimerRef.current);
      clearTimeout(rotTimerRef.current);
      clearTimeout(outTimerRef.current);
    };
  }, []);

  useEffect(() => {
    clearTimeout(inTimerRef.current);
    inTimerRef.current = setTimeout(() => {
      setKi(true);
    }, 0);
  }, []);

  useEffect(() => {
    if (out === true) {
      clearTimeout(rotTimerRef.current);
      setRot(true);
      rotTimerRef.current = setTimeout(() => {
        setKo(true);
      }, 600);
      clearTimeout(outTimerRef.current);
      outTimerRef.current = setTimeout(() => {
        setRot(false);
        setKo(false);
      }, 1200);
    }
  }, [out]);

  const rocket = useMemo(
    () => (
      <img
        src={frog}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.05 }}
        className="frog"
      />
    ),
    []
  );

  return (
    <div className={`${props.className}`}>
      <div
        className={`kick-out-rot ${rot ? "trans rot-out" : "waiting"} ${
          kickout ? "kick-out" : ""
        } ${kickin ? "kick-in" : ""}`}
      >
        {out && rocket}
        {props.children}
      </div>
    </div>
  );
}

export default React.memo(styled(RotKickIn)`
  height: 100%;
  position: relative;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .frog {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 30%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 40vw;
    height: auto;
    z-index: 300;
    transition: 1s all;

    ${(props) => props.theme.tablet} {
      top: 40%;
      width: 60vw;
    }

    ${(props) => props.theme.mobile} {
      top: 40%;
      width: 80vw;
    }
    animation: fadein 0.5s forwards;
  }

  .trans {
  }

  .kick-out-rot {
    height: 100%;
  }
`);

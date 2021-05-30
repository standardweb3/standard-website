import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";
import { useViewportContext } from "Components/NewPageComponents/useViewport";

function Tip3(props) {
  const viewport = useViewportContext();

  return (
    <motion.div
      drag={viewport === "desktopsm" || viewport === "desktop"}
      className={`${props.className}`}
      animate={{}}
    >
      ©2021 Standard Protocol. All Rights Reserved. Privacy Policy.
    </motion.div>
  );
}

export default React.memo(styled(Tip3)`
  position: fixed;
  display: flex;
  text-align: center;
  z-index: 301;
  bottom: 25px;
  left: calc(50% - 14 * 16px);
  font-size: 16px;
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 2px ${(props) => props.theme.textshadow};

  ${(props) => props.theme.tablet} {
    font-size: 12px;
    bottom: 0px;
    left: calc(50% - 10 * 16px);
  }
`);

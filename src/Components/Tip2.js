import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";

function Tip(props) {
  return (
    <motion.div drag className={`${props.className}`} animate={{}}>
      Try throwing texts and cards around!
    </motion.div>
  );
}

export default React.memo(styled(Tip)`
  position: fixed;
  display: flex;
  text-align: center;
  z-index: 301;
  bottom: 55px;
  left: calc(50% - 8 * 16px);
  font-size: 16px;
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 2px ${(props) => props.theme.textshadow};
`);

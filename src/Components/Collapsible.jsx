// Copyright 2017-2021 @polkadot/app-staking authors & contributors
// and @canvas-ui/app-staking authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useState, useEffect } from "react";
import { createUseStyles, useTheme } from "react-jss";
import AnimateHeight from "react-animate-height";
import NewTypical from "./NewTypical";

const useStyles = createUseStyles((Themes) => {
  return {
    btn: {
      background: "#201833",
      padding: "6px 10px",
      border: "1px solid #fff",
      borderRadius: "5px",
      marginBottom: "24px",
      display: "inline-block",
      cursor: "pointer",
      // fontWeight: 600,
      // fontSize: "24px",
    },
  };
});

function Collapsible({
  onToggle,
  children,
  summary,
  defaultOpen,
  control,
  status,
  collapsedHeight = 0,
}) {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [height, setHeight] = useState(defaultOpen ? "auto" : 0);

  useEffect(() => {
    if (control) {
      const controlState = status ? "auto" : collapsedHeight;
      if (controlState !== height) setHeight(controlState);
    }
  }, [status, control]);

  const toggleCollapsible = () => {
    const willOpen = height === "auto" ? false : true;
    setHeight(height === "auto" ? collapsedHeight : "auto");
    onToggle && onToggle(willOpen);
  };

  return (
    <div className="">
      <div className="collapsible-summary-container">
        <div className="collapsible-summary">{summary}</div>
        <div className={classes.btn} onClick={toggleCollapsible}>
          {height === collapsedHeight ? "View More" : "Close"}
        </div>
      </div>
      <AnimateHeight duration={500} height={height}>
        {children}
      </AnimateHeight>
    </div>
  );
}

export default Collapsible;

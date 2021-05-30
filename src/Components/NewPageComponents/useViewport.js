import React, { useState, useContext } from "react";
// import { useWindowWidth } from "@react-hook/window-size";

export const viewportContext = React.createContext();
export const useViewportContext = () => useContext(viewportContext);

const getViewport = (width) => {
  if (width > 1200) {
    return "desktop";
  }
  if (width > 992) {
    return "desktopsm";
  } else if (width > 768) {
    return "tablet";
  } else if (width >= 576) {
    return "tabletsm";
  }
  return "mobile";
};

export function useViewport() {
  const [viewport, setViewport] = useState(getViewport(window.innerWidth));

  return viewport;
}

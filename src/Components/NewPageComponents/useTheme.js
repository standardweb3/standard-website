import React, { useContext, useState } from "react";
import store from "store";

const STORAGE_KEY = "options:theme";

function readOptions() {
  return store.get(STORAGE_KEY) || { defaults: {} };
}

function getLastValue() {
  const options = readOptions();
  return options.theme || "dark";
}

function setLastValue(value) {
  const options = readOptions();
  options.theme = value;
  store.set(STORAGE_KEY, options);
}

export const themeContext = React.createContext();
export const useThemeContext = () => useContext(themeContext);

export function useTheme() {
  const [theme, setTheme] = useState(getLastValue() || "dark");

  const switchLight = () => {
    setLastValue("light");
    setTheme("light");
  };

  const switchDark = () => {
    setLastValue("dark");
    setTheme("dark");
  };

  return [theme, switchLight, switchDark];
}

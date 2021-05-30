import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { ThemeProvider } from "react-jss";
import { ThemeProvider } from "styled-components";
import { useTheme, themeContext } from "Components/NewPageComponents/useTheme";
import ThemeSwitcher from "Components/ThemeSwitcher";
import Socials from "Components/Socials";
import Tip from "Components/Tip";
import Tip2 from "Components/Tip2";
import Tip3 from "Components/Tip3";

import theme from "./theme";
import GlobalStyle from "Components/GlobalStyle";

import {
  viewportContext,
  useViewport,
} from "Components/NewPageComponents/useViewport";

// CSS Stylesheets
import "Stylesheets/App.css";
import "Stylesheets/New.scss";

// Pages
// import HomePage from "Pages/HomePage";
import Onepager from "Pages/Onepager";
import NewPage from "Pages/NewPage";

function App() {
  const viewport = useViewport();

  const [_theme, switchLight, switchDark] = useTheme();

  return (
    <ThemeProvider theme={theme[_theme]}>
      <themeContext.Provider value={_theme}>
        <viewportContext.Provider value={viewport}>
          <GlobalStyle />

          <ThemeSwitcher
            _theme={_theme}
            switchLight={switchLight}
            switchDark={switchDark}
          />
          <Socials />
          {(viewport === "desktop" || viewport === "desktopsm") && <Tip2 />}
          <Tip />
          <Tip3 />
          <BrowserRouter>
            <Switch>
              <Route path="/onepager" exact>
                <Onepager />
              </Route>
              <Route path="/">
                <NewPage />
              </Route>
            </Switch>
          </BrowserRouter>
        </viewportContext.Provider>
      </themeContext.Provider>
    </ThemeProvider>
  );
}

export default App;

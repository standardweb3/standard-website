import ReactGA from "react-ga";

ReactGA.initialize("UA-193582850-1");
ReactGA.pageview(window.location.pathname + window.location.search);

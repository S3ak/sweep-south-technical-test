import React from "react";
import { ThemeProvider } from "styled-components";
import { Grommet } from "grommet";
import App from "next/app";
import NProgress from "nprogress";
import Router from "next/router";

import GlobalStyles from "../src/styles/global";
import "../src/styles/nprogress.css";

// TODO: Establish theme try use css vars and pass them in here
// TODO: Move to data dir

const theme = {
  palette: {
    action: ["#1976d2", "#2196f3", "#71bcf7", "#c2e2fb"],
    alternative: ["#c2185b", "#e91e63", "#f06292", "#f8bbd0"],
    accent: ["#c2185b", "#e91e63", "#f06292", "#f8bbd0"],
    background: ["#0070f3"],
    backgroundGradient: [],
    backgroundInverse: ["#0070f3"],
    focus: ["#0070f3"],
    danger: ["#0070f3"],
    success: ["#0070f3"],
    help: ["#0070f3"],
    headings: ["#0070f3"],
    content: [],
    border: ["#0070f3"],
    disabled: ["#0070f3"],
    muted: ["#0070f3"],
    shadow: ["#0070f3"],
    white: ["#fff"],
    black: ["#000"],
  },
  radius: {
    s1: "2px",
    base: "5px",
    l1: "10px",
  },
  fonts: {
    fontFamilies: {
      base: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif`,
      heading: `Verdana, Geneva, sans-serif`,
      buttons: `"Lucida Console", Monaco, monospace`,
    },
    sizes: {
      h1: "2rem",
      h2: "1.5rem",
      h3: "1.2rem",
      h4: "1.1rem",
      h5: "0.8rem",
      h6: "0.5rem",
      p: "1rem",
    },
  },
  spacing: {
    lg: ["1.61em", "2.61em", "4.23em", "6.85em", "11.08em"],
    base: "1em",
    sm: ["0.61em", "0.38em", "0.23em"],
  },
};

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = () => {
  // console.log('onRouteChnageStart triggered');
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChnageComplete triggered');
  NProgress.done();
};

Router.onRouteChangeError = () => {
  // console.log('onRouteChnageError triggered');
  NProgress.done();
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Grommet>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </Grommet>
    );
  }
}

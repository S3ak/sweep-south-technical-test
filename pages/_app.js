import React from "react";
import { PageTransition } from "next-page-transitions";
import { ThemeProvider } from "styled-components";
import { Grommet } from "grommet";
import App, { Container } from "next/app";

import Loader from "../src/components/presentational/loader";

import GlobalStyles from "../src/styles/global";

const TIMEOUT = 400;

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

function MyApp({ Component, pageProps }) {
  return (
    <Grommet>
      <ThemeProvider theme={theme}>
        <PageTransition
          timeout={TIMEOUT}
          classNames="page-transition"
          loadingComponent={<Loader />}
          loadingDelay={500}
          loadingTimeout={{
            enter: TIMEOUT,
            exit: 0,
          }}
          loadingClassNames="loading-indicator"
        >
          <Component {...pageProps} />
        </PageTransition>
        <GlobalStyles />

        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity ${TIMEOUT}ms;
          }
          .loading-indicator-appear,
          .loading-indicator-enter {
            opacity: 0;
          }
          .loading-indicator-appear-active,
          .loading-indicator-enter-active {
            opacity: 1;
            transition: opacity ${TIMEOUT}ms;
          }
        `}</style>
      </ThemeProvider>
    </Grommet>
  );
}

export default MyApp;

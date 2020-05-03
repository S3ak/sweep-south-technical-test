export const globalStyles = `
    :root {
        --color-white: #fff;
        --color-black: #fff; 
    }

    html {
      height: 100%;
      font-size: 100%;
    }

    body {
      max-height: 100%;
      color: pink;
    }

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
    box-sizing: border-box;
}

* {
  box-sizing: inherit;
}

    img {
    width: 100%;
  }

  figure, img, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;

export default globalStyles;

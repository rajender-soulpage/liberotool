import React from "react";
// next imports
import App from "next/app";
// next redux wrapper
import withRedux from "next-redux-wrapper";
// react redux
import { Provider } from "react-redux";
// store
import configureStore from "lib/store";
// styled Components
import { ThemeProvider } from "styled-components";
// Theme
import { theme } from "styles/theme";
// Stylesheets
import "bootstrap/dist/css/bootstrap.min.css";

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </>
    );
  }
}

export default withRedux(configureStore)(MyApp);
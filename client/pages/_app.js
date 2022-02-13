import * as React from "react";
import Layout from "../Layout/Layout";
import "../styles/globals.css";
import "../styles/team.css";
import "../styles/order.css";

import { Provider } from "react-redux";
import { store } from "../store";
import axios from "axios";
import baseUrl from "./../baseUrl";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
axios.defaults.baseURL = baseUrl;
console.log("::::::::", baseUrl);
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          pauseOnVisibilityChange
          closeOnClick
          pauseOnHover
        />
      </Layout>
    </Provider>
  );
}

export default MyApp;

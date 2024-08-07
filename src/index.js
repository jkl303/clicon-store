import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root"),
);

root.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </Provider>,
);

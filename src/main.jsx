import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import thunk from "redux-thunk";
import { Provider, useDispatch } from "react-redux";
// import { Provider, useDispatch } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./reducer";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
// let middlewares = [thunk];
// middlewares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

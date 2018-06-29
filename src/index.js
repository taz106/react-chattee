import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMIddleware from "redux-saga";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import reducers from "./reducers";
import setupSocket from "./socket";
import handleNewMessages from "./sagas";
import username from "./utils/name";

const sagaMiddleWare = createSagaMIddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleWare)
);

const socket = setupSocket(store.dispatch, username);
sagaMiddleWare.run(
  handleNewMessages,
  {socket, username}
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

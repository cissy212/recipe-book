import Routing from "./Routing";
import "./App.css";
import { Provider } from "react-redux";

import React from "react";

import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { createStore, applyMiddleware } from "redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Routing />
      </div>
    </Provider>
  );
}

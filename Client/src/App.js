import Routing from "./Routing";
import "./App.css";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import React from "react";

import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { createStore, applyMiddleware } from "redux";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Routing />
      </div>
    </Provider>
  );
}

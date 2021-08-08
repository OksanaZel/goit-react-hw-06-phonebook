import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux';
import store from "./redux/store";
// import { myAction } from "./redux/actions";

// store.dispatch(myAction(10));
// console.log(store);
// console.log(store.getState());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);


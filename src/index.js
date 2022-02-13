import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "react-thunk";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import catsReducer from "./features/cat/catsSlice";

const store = createStore(catsReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById("root"));

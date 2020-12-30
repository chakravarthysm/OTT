import React from "react";
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { createBrowserHistory } from 'history';
import App from "./App";
import rootReducer from "./reducers"


export const history = createBrowserHistory();

const store = configureStore({
    reducer: rootReducer
})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"));
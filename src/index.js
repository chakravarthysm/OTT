import React from "react";
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer from "./reducers"

const store = configureStore({
    reducer: rootReducer
})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"));
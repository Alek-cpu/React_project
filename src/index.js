import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import allReducers from "./reducers/index";
import './app.scss';

const store = new createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
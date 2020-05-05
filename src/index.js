import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import * as serviceWorker from "./serviceWorker";
import {Provider} from "react-redux";
import {createStore} from "redux";
import allReducers from "./reducers/index";
import './styles/main-style.scss';

const store = new createStore(allReducers);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
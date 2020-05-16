import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import createStore from './store/index';
import './app.scss';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={createStore}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import ContainerDiv from './components/container-div/ContainerDiv';
import toDo from './components/toDo';

import "./styles/main.scss";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar />
                <ContainerDiv />
            </div>
        </BrowserRouter>
    );
}

export default App;

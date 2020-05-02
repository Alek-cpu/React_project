import React from 'react';
import './styles/App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ContainerDiv from "./components/Container/Container";
import {BrowserRouter} from "react-router-dom";



function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar />
                <ContainerDiv
                    userDataInfo={props.userDataInfo}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;

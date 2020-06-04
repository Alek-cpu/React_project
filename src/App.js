import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import ContainerDiv from "./components/container-div/ContainerDiv";
import {BrowserRouter} from "react-router-dom";
import "./styles/main.scss";

function App(props) {
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

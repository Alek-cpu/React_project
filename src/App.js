import React from "react";
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
                <ContainerDiv />
            </div>
        </BrowserRouter>
    );
}

export default App;

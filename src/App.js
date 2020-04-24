import React from 'react';
import './App.css';
import Header from "./header";
import Sidebar from "./sidebar";
import ContainerDiv from "./container";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <ContainerDiv />
    </div>
  );
}

export default App;

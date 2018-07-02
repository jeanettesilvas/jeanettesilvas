import React, { Component } from "react";
import "./App.css";
import { Portfolio } from "./components/Portfolio/Portfolio";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Portfolio />
            </div>
        );
    }
}

export default App;

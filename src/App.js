import React from 'react';
import { Route } from "react-router-dom";

import './scss/app.scss';

import { Header } from "./components";
import { Home, Cart } from "./pages";





function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path = '/' component = { Home }  exact/>
                <Route path = '/card' component = { Cart } exact/>
            </div>
        </div>
    );
}

export default App;

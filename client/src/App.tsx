import React from 'react';
import Header from "./components/App/Header";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import About from "./views/About";
import Tasks from "./views/Tasks";
import Home from "./views/Home";
import RouterView from "./router";

function App() {
  return (
    <BrowserRouter>
        <div className="app">
            <div className="container m-auto">
                <Header/>

                <div className="w-full flex justify-center mt-6">
                    <RouterView/>
                </div>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;

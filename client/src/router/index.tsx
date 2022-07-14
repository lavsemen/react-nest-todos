import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../views/About";
import Tasks from "../views/Tasks";
import Home from "../views/Home";

function RouterView() {
    return (
        <>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/tasks" element={<Tasks/>}/>
                <Route index element={<Home/>} />
            </Routes>
        </>
    );
}

export default RouterView;
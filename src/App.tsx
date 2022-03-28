import React, { VFC } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Sample from "./page/Sample";
import Home from "./page/Home";
import routingPath from "./routing/routing-path";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path={routingPath.samplePage} element={<Sample />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

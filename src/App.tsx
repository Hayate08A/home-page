import React, { VFC } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, THeaderProps } from "./component/common/header/Header";
import Sample from "./page/Sample";
import Home from "./page/Home";
import routingPath from "./routing/routing-path";

function App() {
  const headerProps: THeaderProps = {
    title: "写真！！",
    menus: [
      {
        title: "ほーむ！",
        path: routingPath.home,
      },
      {
        title: "サンプルページ！",
        path: routingPath.samplePage,
      },
    ],
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header title={headerProps.title} menus={headerProps.menus} />
        <Routes>
          <Route index element={<Home />} />
          <Route path={routingPath.samplePage} element={<Sample />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

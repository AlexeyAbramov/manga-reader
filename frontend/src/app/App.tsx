import { FC } from "react";
import "./App.scss";

import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";

const App: FC = () => {
  const logIn = false;

  return (
    <Routes>
      {logIn
        ? privateRoutes.map((route) => <Route key={route.path} {...route} />)
        : publicRoutes.map((route) => <Route key={route.path} {...route} />)}
    </Routes>
  );
};

export default App;

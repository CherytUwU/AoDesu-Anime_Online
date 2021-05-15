import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./styles.css";
import Menu from "./components/Menu";
import AppRoute from "./components/router/AppRoute";
import routes from "./config/routing/routes";

export default function App() {
  return (
    <Suspense fallback="Cargando...">
      <Router>
        <Menu />
        <Switch>
          {routes.map(route => (
            <AppRoute
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
}

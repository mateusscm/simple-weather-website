import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

export default function VisualRoutes({ routes }) {
  return (
    <main>
      <Switch>
        {routes.map((route) => (
          <Route
            key={Math.random()}
            exact={route.exact}
            path={route.path}
            render={(props) => {
              return <route.component {...props} routes={routes} />;
            }}
          />
        ))}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
}

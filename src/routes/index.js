import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../page/HomePage";
import { PrivateRoute } from "../utilities/PrivateRoute";
import ProtectedPage from "../page/ProtectedPage";
import { Menu } from "../page/Menu";

export const AppRouter = () => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <h3>Loading ... !!!</h3>;
  }

  return (
    <>
      <Menu />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {!keycloak.authenticated ? keycloak.login() : <HomePage></HomePage>}
          </Route>
          <PrivateRoute
            roles={["RealmAdmin"]}
            path="/protected"
            component={ProtectedPage}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

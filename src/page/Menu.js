import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import AuthorizedFunction from "../utilities/AuthorizedFunction";

export const Menu = () => {
  const { keycloak } = useKeycloak();
  return (
    <ul>
      <li>
        <a href="/">Home Page </a>
      </li>
      {AuthorizedFunction(["RealmAdmin"]) && (
        <li>
          <a href="/protected">Protected Page</a>
        </li>
      )}

      {keycloak && !keycloak.authenticated && (
        <li>
          <a className="btn-link" onClick={() => keycloak.login()}>
            Login keycloak.
          </a>
        </li>
      )}

      {keycloak && keycloak.authenticated && (
        <li>
          <a className="btn-link" onClick={() => keycloak.logout()}>
            Logout ({keycloak.tokenParsed.preferred_username})
          </a>
        </li>
      )}
    </ul>
  );
};

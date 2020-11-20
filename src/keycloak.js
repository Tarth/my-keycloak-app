import Keycloak from "keycloak-js";
const keycloakConfig = {
  url: "http://localhost:8080/auth",
  realm: "example",
  clientId: "exampleclient",
};
export const keycloak = new Keycloak(keycloakConfig);

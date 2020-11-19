import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const ProtectedPage = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
    <div>
      <h1>Home Page</h1>

      <strong>This page is protected</strong>

      {initialized ? (
        keycloak.authenticated && (
          <pre>{JSON.stringify(keycloak, undefined, 2)}</pre>
        )
      ) : (
        <h2>keycloak initializing ....!!!!</h2>
      )}
    </div>
  );
};
export default ProtectedPage;

import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
      <h1>A Wild Error Appeared</h1>
      <p>Something went wrong. Sorry about that!</p>
      <p>
        <i>error: {error.statusText || error.message}</i>
      </p>
      <Link to={`/`}>Home</Link>
    </div>
  );
};

export { ErrorPage };

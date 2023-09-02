import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();


  return (
    <div id="error-page">
 
      <h1>
        <i>{error.statusText || error.message}</i>
      </h1>

      <button>Home</button>
    </div>
  );
}
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>WOOOPS!</h1>
      <p>Something broke again...</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

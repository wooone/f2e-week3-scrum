import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="flex w-full h-[100vh] items-center justify-center flex-col">
        <h1 className="font-semibold text-5xl mb-10">Oops!</h1>
        <p className="mb-8">Sorry, an unexpected error has occurred.</p>
        <p className="text-gray-400">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}

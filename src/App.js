import "./App.css";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import IntroPage from "./pages/IntroPage/IntroPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="home" />,
      errorElement: <ErrorPage />,
    },
    {
      path: "home",
      element: <HomePage />,
    },
    {
      path: "intro",
      element: <IntroPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

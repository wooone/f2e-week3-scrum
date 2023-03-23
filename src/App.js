import "./App.css";
import "./index.css";
import "./assets/css/custom.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import IntroPage from "./pages/IntroPage/IntroPage";
import Intro2Page from "./pages/IntroPage/Intro2Page";
import Intro3Page from "./pages/IntroPage/Intro3Page";
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
    {
      path: "intro2",
      element: <Intro2Page />,
    },
    {
      path: "intro3",
      element: <Intro3Page />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

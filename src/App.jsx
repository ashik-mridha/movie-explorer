import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Movies from "./pages/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "movies",
        element: <Movies />
      }
    ]
  }
]);

function Router() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Router

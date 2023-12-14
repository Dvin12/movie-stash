import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Lists from "./pages/Lists/Lists";
import Background from "./components/Background";
import TVShows from "./pages/TVShows/TVShows";

function Layout() {
  return (
    <Main>
      <Navigation />
      <Outlet />
      <Footer />
      <Background />
    </Main>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/movies",
        element: <Movies />,
      },

      {
        path: "/tvshows",
        element: <TVShows />,
      },

      {
        path: "/lists",
        element: <Lists />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

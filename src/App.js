import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Containers/Layout";
import Home from "./pages/Home";
import Post from "./pages/Post";
import AppProviders from "./context/AppProviders";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Post />,
      },
      {
        path:'not-found',
        element:<NotFound/>
      },
      {
        path:'*',
        element: <NotFound/>
      }
    ],
  },
]);
const App = () => {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
};

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Containers/Layout";
import Home from "./pages/Home";
import Post from "./pages/Post";
import AppProviders from "./context/AppProviders";

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

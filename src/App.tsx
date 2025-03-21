import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import DetailPage from "./pages/DetailPage";
import TypePage from "./pages/TypePage";
import AboutUsPage from "./pages/AboutUsPage";
import { ThemeContextProvider } from "./lib/ToggleLightDarkMode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      {
        path: "/pokemon/:id",
        element: <DetailPage />,
      },
      {
        path: "/type",
        element: <TypePage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;

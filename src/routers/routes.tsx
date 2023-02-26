import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import RedirectRoute from "../components/RedirectRoute/RedirectRoute";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUp";

const routes = [
  {
    path: "/",
    element: <App />,
    redirect: { path: "/login", element: <LoginPage /> },
    children: [
      { path: "/", element: <RedirectRoute element={<App />} /> },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;

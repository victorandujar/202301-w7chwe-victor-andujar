import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUp";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
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

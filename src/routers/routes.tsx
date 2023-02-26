import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import SignUp from "../pages/SignUp/SignUp";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;

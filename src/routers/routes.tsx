import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;

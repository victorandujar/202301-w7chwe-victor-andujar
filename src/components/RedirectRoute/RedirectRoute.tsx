import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { Routes } from "../../types/types";

interface RedirectRouteProps {
  element: JSX.Element;
}

const RedirectRoute = ({ element }: RedirectRouteProps): JSX.Element => {
  const { token } = useAppSelector((state) => state.user);

  return token ? element : <Navigate to={Routes.login} replace={true} />;
};

export default RedirectRoute;

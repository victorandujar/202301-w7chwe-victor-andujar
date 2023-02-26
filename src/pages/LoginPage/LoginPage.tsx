import LoginForm from "../../components/LoginForm/LoginForm";
import { useAppSelector } from "../../store/hooks";
import LoginPageStyled from "./LoginPageStyled";
import { Navigate } from "react-router-dom";

const LoginPage = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

  return !isLogged ? (
    <LoginPageStyled>
      <LoginForm />
    </LoginPageStyled>
  ) : (
    <Navigate to={"/"} />
  );
};

export default LoginPage;

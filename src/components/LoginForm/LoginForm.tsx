import LoginFormStyled from "./LoginFormStyled";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { useState } from "react";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await loginUser({ password, username });

    setUsername("");
    setPassword("");
  };

  const handleUsername = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(value);
  };

  const handlePassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
  };

  return (
    <LoginFormStyled className="login-form" onSubmit={onSubmitHandler}>
      <label htmlFor="username" className="login-form__section">
        Username
        <input
          type="text"
          aria-label="username"
          className="login-form__input"
          onChange={handleUsername}
          value={username}
          required
        />
      </label>
      <label htmlFor="password" className="login-form__section">
        Password
        <input
          type="text"
          aria-label="password"
          className="login-form__input"
          onChange={handlePassword}
          value={password}
          required
        />
      </label>
      <button className="login-form__button">Log in</button>
      <div className="login-form__footer footer">
        <span className="footer__text">Not registered?</span>
        <Link to="/sign-up" className="footer__link">
          Sign up
        </Link>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;

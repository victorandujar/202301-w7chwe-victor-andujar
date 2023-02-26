import LoginFormStyled from "./LoginFormStyled";
import { Link } from "react-router-dom";

const LoginForm = (): JSX.Element => {
  return (
    <LoginFormStyled className="login-form">
      <label htmlFor="username" className="login-form__section">
        Username
        <input
          type="text"
          aria-label="username"
          className="login-form__input"
        />
      </label>
      <label htmlFor="password" className="login-form__section">
        Password
        <input
          type="text"
          aria-label="password"
          className="login-form__input"
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

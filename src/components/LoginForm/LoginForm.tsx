const LoginForm = (): JSX.Element => {
  return (
    <form>
      <label htmlFor="username" className="register-form__section">
        Username
        <input
          type="text"
          aria-label="username"
          className="register-form__input"
        />
      </label>
      <label htmlFor="password" className="register-form__section">
        Password
        <input
          type="text"
          aria-label="password"
          className="register-form__input"
        />
      </label>
      <button className="register-form__button">Log in</button>
    </form>
  );
};

export default LoginForm;

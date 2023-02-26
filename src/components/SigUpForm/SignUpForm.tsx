import SignUpStyled from "./SignUpStyled";

const SignUpForm = (): JSX.Element => {
  return (
    <SignUpStyled className="register-form">
      <label htmlFor="name" className="register-form__section">
        Name
        <input type="text" aria-label="name" className="register-form__input" />
      </label>
      <label htmlFor="email" className="register-form__section">
        Email
        <input
          type="text"
          aria-label="email"
          className="register-form__input"
        />
      </label>
      <label htmlFor="phoneNumber" className="register-form__section">
        Phone number
        <input
          type="text"
          aria-label="Phone number"
          className="register-form__input"
        />
      </label>
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
      <label htmlFor="image" className="register-form__section">
        Profile image
        <input
          type="image"
          aria-label="Profile image"
          className="register-form__input"
        />
      </label>
      <button className="register-form__button">Sign up</button>
    </SignUpStyled>
  );
};

export default SignUpForm;

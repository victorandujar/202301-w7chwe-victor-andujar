import styled from "styled-components";

const SignUpStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #ededed;
  padding: 30px;
  border-radius: 5px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);

  .register-form {
    &__section {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-weight: 800;
      font-size: 1rem;
    }

    &__input {
      border: 1px solid black;
      border-radius: 5px;
      height: 1.8rem;
      padding: 0 6px;
      font-family: inherit;
    }

    &__button {
      background-color: black;
      color: #fff;
      height: 1.8rem;
      border-radius: 5px;
    }
  }
`;

export default SignUpStyled;

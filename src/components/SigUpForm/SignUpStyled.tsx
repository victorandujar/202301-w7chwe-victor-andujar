import styled from "styled-components";

const SignUpStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .register-form {
    &__section {
      display: flex;
      flex-direction: column;
      gap: 10px;
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

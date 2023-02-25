import styled from "styled-components";

const CardStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 0.9rem;
  border: 2px solid black;
  border-radius: 10px;
  width: 15.8rem;
  background-color: #e7e7e7;

  .card {
    &__image {
      border-radius: 7.5px 7.5px 0 0;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 6px;
  }

  .buttons {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    &__friend {
      border: 2px solid black;
      border-radius: 10px;
      padding: 5px 10px;
      background-color: #acacac;
    }

    &__enemie {
      border: 2px solid black;
      border-radius: 10px;
      padding: 5px 10px;
      background-color: #000000;
      color: #fff;
    }
  }
`;

export default CardStyled;

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "../../mocks/Wrapper";
import GlobalStyles from "../../styles/GlobalSyles";
import LoginPage from "./LoginPage";

describe("Given a LoginPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a form component with a button and the text 'Log in'", () => {
      render(
        <Wrapper>
          <GlobalStyles />
          <LoginPage />
        </Wrapper>,
        { wrapper: BrowserRouter }
      );

      const textButton = "Log in";

      const expectedButton = screen.getByRole("button", { name: textButton });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});

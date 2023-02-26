import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { BrowserRouter } from "react-router-dom";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Log in'", () => {
      const buttonText = "Log in";

      render(<LoginForm />, { wrapper: BrowserRouter });

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show a link with the text 'Sign up'", () => {
      const linkText = "Sign up";

      render(<LoginForm />, { wrapper: BrowserRouter });

      const expectedLink = screen.getByRole("link", { name: linkText });

      expect(expectedLink).toBeInTheDocument();
    });
  });
});

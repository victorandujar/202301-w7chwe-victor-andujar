import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a nav bar with a Link text 'Sign in'", () => {
      const linkText = "Sign in";

      render(<App />, { wrapper: BrowserRouter });

      const expectedLink = screen.getByRole("link", { name: linkText });

      expect(expectedLink).toBeInTheDocument();
    });
  });
});

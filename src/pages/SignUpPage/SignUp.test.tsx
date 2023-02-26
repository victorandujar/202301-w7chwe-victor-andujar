import { render, screen } from "@testing-library/react";
import SignUpPage from "./SignUp";

describe("Given a SignUp page", () => {
  describe("When it is rendered", () => {
    test("Then  it should show a form with a button text 'Sign up'", () => {
      const buttonText = "Sign up";

      render(<SignUpPage />);

      const expectedButtonText = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButtonText).toBeInTheDocument();
    });
  });
});

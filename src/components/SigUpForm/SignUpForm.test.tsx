import { render, screen } from "@testing-library/react";
import SignUpForm from "./SignUpForm";

describe("Given a SignUpForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Sign up'", () => {
      const buttonText = "Sign up";

      render(<SignUpForm />);

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show an input with an aria label text 'name'", () => {
      const labelText = "name";

      render(<SignUpForm />);

      const expectedLabel = screen.getByLabelText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });
  });
});

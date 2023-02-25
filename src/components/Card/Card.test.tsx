import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'Tony'", () => {
      const title = "Tony";

      render(<Card />);

      const expectedTitle = screen.getByRole("heading", { name: title });

      expect(expectedTitle).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Fuck you'", () => {
      const buttonText = "Fuck you";

      render(<Card />);

      const expectedText = screen.getByRole("button", { name: buttonText });

      expect(expectedText).toBeInTheDocument();
    });
  });
});

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'Antisocial club'", () => {
      const title = "Antisocial club";

      render(<Layout />, { wrapper: BrowserRouter });

      const expectedTitle = screen.getByRole("heading", { name: title });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});

import { describe, expect, it, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";


describe("Contact US Test", () => {
    test("should render contact us page", () => {
      render(<Contact />);
      const heading = screen.getByRole("heading");
      expect(heading).toBeInTheDocument();
    });

    ("should render button inside contact us page", () => {
      render(<Contact />);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });
    it("should render input name inside contact us page", () => {
      render(<Contact />);
      const button = screen.getByPlaceholderText("User Name");
      expect(button).toBeInTheDocument();
    });
    it("should load 2 input boxes inside contact us page", () => {
      render(<Contact />);
      const inputBox = screen.getAllByRole("textbox");
      expect(inputBox.length).toBe(2);
    });
    it("should not load 3 input boxes inside contact us page", () => {
      render(<Contact />);
      const inputBox = screen.getAllByRole("textbox");
      expect(inputBox.length).not.toBe(3);
    });
})

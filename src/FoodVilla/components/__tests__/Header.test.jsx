import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "../Header";
import renderTestComponent from "../../utils/renderTestComponent";


describe("Header", () => {

  it("should render Header component with logo alt text", () => {
    render(renderTestComponent(Header));
    const logo = screen.getByAltText("Street Food Logo");
    expect(logo).toBeInTheDocument();
  });
    
    it("should render Header component with Status : 🟢", () => {
      render(renderTestComponent(Header));
      const logo = screen.getByText(/Status : 🟢/);
      expect(logo).toBeInTheDocument();
    });
    
  it("should render Header component with Home link", () => {
    render(renderTestComponent(Header));
    const home = screen.getByRole("link", { href: "/", name: "Home" });
    expect(home).toBeInTheDocument();
  });
    
  it("should render Header component with About us link", () => {
    render(renderTestComponent(Header));
    const about = screen.getByRole("link", {
      href: "/about",
      name: "About us",
    });
    expect(about).toBeInTheDocument();
  });
    
  it("should render Header component with Contact us link", () => {
    render(renderTestComponent(Header));
    const contact = screen.getByRole("link", {
      href: "/contact",
      name: "Contact us",
    });
    expect(contact).toBeInTheDocument();
  });
    
  it("should render Header component with Cart items", () => {
    render(renderTestComponent(Header));
    const loginButton = screen.getByText(/Cart/);
    expect(loginButton).toBeInTheDocument();
  });
    
  it("should render Header component with login button", () => {
    render(renderTestComponent(Header));
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  it("should change Login to Logout onclick", () => {
    render(renderTestComponent(Header));
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {
      name: "Logout",
    });

    expect(logoutButton).toBeInTheDocument();
  });
});

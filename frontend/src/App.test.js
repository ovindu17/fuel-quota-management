import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "./App";

describe("App Component", () => {
  const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
  };

  test("renders app component", () => {
    renderWithRouter(<App />);
    // Add specific assertions based on your app's content
    expect(document.body).toBeInTheDocument();
  });
});

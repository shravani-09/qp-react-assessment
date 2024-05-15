import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App /> Component", () => {
  test("renders Todo App title", () => {
    render(<App />);
    const titleElement = screen.getByText("Todo App");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders AddTask component", () => {
    render(<App />);
    const addTaskElement = screen.getByRole("textbox", {
      name: "Enter a new task",
    });
    expect(addTaskElement).toBeInTheDocument();
  });

  test("renders TodoList component", () => {
    render(<App />);
    const todoListElement = screen.getByRole("list");
    expect(todoListElement).toBeInTheDocument();
  });

  test("renders Container with maxWidth 'sm'", () => {
    render(<App />);
    const containerElement = screen.getByTestId("app-container"); // Assign a test id to the Container
    expect(containerElement).toBeInTheDocument();
  });
});

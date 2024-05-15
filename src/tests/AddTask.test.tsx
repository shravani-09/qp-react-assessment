import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AddTask from "../components/AddTask";
import { TodoProvider } from "../hooks/useTodoProvider";

describe("AddTask Component", () => {
  test("renders AddTask component", () => {
    render(
      <TodoProvider>
        <AddTask />
      </TodoProvider>
    );

    const textField = screen.getByLabelText("Enter a new task");
    expect(textField).toBeInTheDocument();

    const addButton = screen.getByRole("button", { name: "Add Task" });
    expect(addButton).toBeInTheDocument();
  });

  test("adds a new task", async () => {
    render(
      <TodoProvider>
        <AddTask />
      </TodoProvider>
    );

    const textField = screen.getByLabelText("Enter a new task");
    const addButton = screen.getByRole("button", { name: "Add Task" });

    fireEvent.change(textField, { target: { value: "Test Task" } });
    fireEvent.click(addButton);

    // await screen.findByText("Test Task");
  });

  test("does not add task if input is empty", () => {
    render(
      <TodoProvider>
        <AddTask />
      </TodoProvider>
    );

    const addButton = screen.getByRole("button", { name: "Add Task" });

    fireEvent.click(addButton);

    const textField = screen.getByLabelText("Enter a new task");
    expect(textField).toHaveValue("");

    // expect(screen.queryByText("")).toBeNull();
  });
});

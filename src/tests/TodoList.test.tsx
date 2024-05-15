import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import extend-expect
import TodoList from "../components/TodoList";
import { useTodoContext } from "../hooks/useTodoProvider";
import { expect } from "@testing-library/jest-dom";

// Mock the useTodoContext hook
jest.mock("../hooks/useTodoProvider", () => ({
  useTodoContext: jest.fn(),
}));

describe("TodoList Component", () => {
  // Sample todos for testing
  const sampleTodos = [
    { id: 1, text: "Todo 1", isCompleted: false },
    { id: 2, text: "Todo 2", isCompleted: true },
    { id: 3, text: "Todo 3", isCompleted: false },
  ];

  beforeEach(() => {
    // Mock the useTodoContext hook return value
    (useTodoContext as jest.Mock).mockReturnValue({
      todos: sampleTodos,
      toggleTodo: jest.fn(),
    });
  });

  test("renders TodoList component with correct number of todo items", () => {
    render(<TodoList />);

    // Check if all todo items are rendered
    const todoItems = screen.getAllByRole("checkbox");
    expect(todoItems).toHaveLength(sampleTodos.length);
  });

  test("renders todo items with correct text and completion status", () => {
    render(<TodoList />);

    // Check if todo items are rendered with correct text and completion status
    const todoTexts = screen.getAllByRole("listitem");
    sampleTodos.forEach((todo, index) => {
      const todoItem = todoTexts[index];
      const textDecorationStyle = todo.isCompleted ? "line-through" : "none";

      // Define the expectation
      const expectation = expect(todoItem).toHaveTextContent(todo.text);

      // Check the textDecoration style based on todo completion status
      if (todo.isCompleted) {
        expectation.toHaveStyle("text-decoration: line-through");
      } else {
        expectation.not.toHaveStyle("text-decoration: line-through");
      }
    });
  });

  test("calls toggleTodo function with correct todo ID when checkbox is clicked", () => {
    render(<TodoList />);

    // Simulate clicking checkboxes and check if toggleTodo is called with correct ID
    const checkboxes = screen.getAllByRole("checkbox");
    checkboxes.forEach((checkbox, index) => {
      fireEvent.click(checkbox);
      expect(useTodoContext().toggleTodo).toHaveBeenCalledWith(
        sampleTodos[index].id
      );
    });
  });
});

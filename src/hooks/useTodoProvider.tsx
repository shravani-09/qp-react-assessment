import React, { createContext, useContext } from "react";
import { useTodoState } from "./useTodoState";
import { Todo } from "../types/todoTypes";

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const todoState = useTodoState();

  return (
    <TodoContext.Provider value={todoState}>{children}</TodoContext.Provider>
  );
};

const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};

export { useTodoContext, TodoProvider };

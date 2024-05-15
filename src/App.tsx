import React from "react";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import { TodoProvider } from "./hooks/useTodoProvider";
import { Container, Typography, Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <TodoProvider>
      <Container data-testid="app-container" maxWidth="sm">
        <Box mt={4} mb={2} textAlign="center">
          <Typography variant="h4" component="h1">
            Todo App
          </Typography>
        </Box>
        <AddTask />
        <TodoList />
      </Container>
    </TodoProvider>
  );
};

export default App;

import React, { useState } from "react";
import { useTodoContext } from "../hooks/useTodoProvider";
import { TextField, Button, Box } from "@mui/material";

const AddTask: React.FC = () => {
  const [task, setTask] = useState("");
  const { addTodo } = useTodoContext();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" alignItems="center" mb={2}>
        <TextField
          id="outlined-basic"
          label="Enter a new task"
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginLeft: "10px" }}
        >
          Add Task
        </Button>
      </Box>
    </form>
  );
};

export default AddTask;

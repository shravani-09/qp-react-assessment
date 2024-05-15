import React from "react";
import { useTodoContext } from "../hooks/useTodoProvider";
import { ListItem, Checkbox, Typography } from "@mui/material";
import { FixedSizeList } from "react-window";
import { styled } from "@mui/system";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:last-child": {
    borderBottom: "none",
  },
}));

const TodoList: React.FC = () => {
  const { todos, toggleTodo } = useTodoContext();

  const Row = ({ index, style }: { index: number; style: any }) => {
    const todo = todos[index];

    return (
      <StyledListItem
        key={todo.id}
        disablePadding
        alignItems="center"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          ...style,
          "&:hover": {
            bgcolor: "rgba(0, 0, 0, 0.04)",
          },
        }}
      >
        <Checkbox
          checked={todo.isCompleted}
          onChange={() => toggleTodo(todo.id)}
        />
        <Typography
          variant="body1"
          sx={{
            textDecoration: todo.isCompleted ? "line-through" : "none",
            flex: 1,
            marginLeft: 1,
          }}
        >
          {todo.text}
        </Typography>
      </StyledListItem>
    );
  };

  return (
    <FixedSizeList
      height={400} // Specify the height of the list
      width="100%" // Take up the full width
      itemSize={60} // Specify the height of each item
      itemCount={todos.length} // Total number of items
    >
      {Row}
    </FixedSizeList>
  );
};

export default TodoList;

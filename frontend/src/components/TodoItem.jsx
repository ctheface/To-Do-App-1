import React, { useState } from 'react';
import { ListItem, ListItemText, Checkbox, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleUpdate = () => {
    updateTodo(todo.id, { ...todo, task });
    setIsEditing(false);
  };

  return (
    <ListItem>
      <Checkbox
        checked={todo.completed}
        onChange={() => updateTodo(todo.id, { ...todo, completed: !todo.completed })}
      />
      {isEditing ? (
        <TextField
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onBlur={handleUpdate}
        />
      ) : (
        <ListItemText primary={todo.task} onClick={() => setIsEditing(true)} />
      )}
      <IconButton onClick={() => deleteTodo(todo.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
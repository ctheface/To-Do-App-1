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
    <ListItem style={{ backgroundColor: '#f9fafb', marginBottom: '10px', borderRadius: '4px' }}>
      <Checkbox
        checked={todo.completed}
        onChange={() => updateTodo(todo.id, { ...todo, completed: !todo.completed })}
      />
      {isEditing ? (
        <TextField
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onBlur={handleUpdate}
          fullWidth
        />
      ) : (
        <ListItemText
          primary={todo.task}
          onClick={() => setIsEditing(true)}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? '#6b7280' : '#1f2937' }}
        />
      )}
      <IconButton onClick={() => deleteTodo(todo.id)} style={{ color: '#ef4444' }}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
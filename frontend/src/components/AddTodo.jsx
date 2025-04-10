import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};

export default AddTodo;
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import { List } from '@mui/material';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = (task) => {
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task }),
    })
      .then(res => res.json())
      .then(newTodo => setTodos([...todos, newTodo]));
  };

  const updateTodo = (id, updatedTodo) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTodo),
    })
      .then(res => res.json())
      .then(updated => {
        setTodos(todos.map(todo => (todo.id === id ? updated : todo)));
      });
  };

  const deleteTodo = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setTodos(todos.filter(todo => todo.id !== id));
    });
  };

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <List>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        ))}
      </List>
    </div>
  );
};

export default TodoList;
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from './todosSlice';

export function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
    >
      <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>{' '}
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        style={{ marginLeft: '0.5rem' }}
      >
        Delete
      </button>
    </li>
  );
}

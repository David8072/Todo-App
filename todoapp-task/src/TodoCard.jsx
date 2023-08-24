import React from 'react';

const TodoCard = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <div className="todo-card">
      <h3>{todo.taskName}</h3>
      <p>{todo.description}</p>
      <p>Status: {todo.status}</p>
      <button onClick={() => updateTodo(todo.id)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoCard;

import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '') return;
    addTodo({ taskName, description, status: 'Not Completed' });
    setTaskName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task Name" value={taskName} onChange={(e) => setTaskName(e.target.value)}/><br/>
      <input type ="text"placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
      <button className="Green-button" type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;

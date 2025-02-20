testing-import React, { useState } from 'react';

function AddTodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo({
        id: Date.now(),
        text: text.trim(),
      });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-1 border border-gray-300 rounded w-40"
        placeholder="Add a new task"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;

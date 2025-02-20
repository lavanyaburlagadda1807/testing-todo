import React from 'react';
import { motion } from 'framer-motion';

function TodoItem({ todo, deleteTodo }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -10 }}
      className="bg-white dark:bg-gray-800 p-4 rounded shadow flex justify-between items-center"
    >
      <span>{todo.text}</span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </motion.li>
  );
}

export default TodoItem;

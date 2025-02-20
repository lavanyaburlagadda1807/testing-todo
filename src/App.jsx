import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <TodoList />
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import '../src/index.css';
import "../src/App.css"
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import FilterBar from './components/FilterBar';

const App = () => {
  return (
    <div>
      <TodoForm/>
      <TodoList/>
      <TodoItem/>
      <FilterBar/>
      <ViewModal/>
    </div>
  )
}

export default App
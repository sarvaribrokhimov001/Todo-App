import React from 'react';
import "../src/App.css";
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Tasks from './components/Tasks';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} >
        <Route path='/tasks' element={<Tasks />} />
      </Route>
    </Routes>
  )
}
export default App
import React from 'react';
import './App.css';


import { useState } from "react";
import TodoList from './components/TodoList';

export default function App() {
 
  return (
   <div>
          <h1>Todo App</h1>
          <TodoList name="Kavana"/>
   </div>
  );
}
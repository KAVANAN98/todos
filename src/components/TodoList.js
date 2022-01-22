import React from 'react'
import { useState } from "react";
import DataList from './DataList';
export default function TodoList(props) {
     // need a state to keep track of todos
  const [todos, setTodos] = useState([]);
  // need state to keep track of the value in the input
  const [todo, setTodo] = useState("");

  // function to get the value of the input and set the new state
  function handleInputChange(e) {
    // set the new state value to what's currently in the input box
    setTodo(e.target.value);
  }
  // function to create a new object on form submit
  function handleFormSubmit(e) {
    // prevent the browser default behavior or refreshing the page on submit
    e.preventDefault();

    // don't submit if the input is an empty string
    if (todo !== "") {
      // set the new todos state (the array)
      setTodos([
        // copy the current values in state
        ...todos,
        {
          // setting a basic id to identify the object
          id: todos.length + 1,
          // set a text property to the value of the todo state and 
          // trim the whitespace from the input
          text: todo.trim()
        }
      ]);
    }

    // clear out the input box
    setTodo("");
  }

    return (
        <div className="App">
            <h3>This App is created by {props.name}</h3>
        {/* create a form element and pass the handleFormSubmit function 
        to the form using the onSubmit prop */}
        <form onSubmit={handleFormSubmit}>
          {/* create an input element - make sure to add the value prop 
          with the state value passed in and the onChange prop to update
          the state every time something is typed in the input */}
          <label>Enter the task</label>
          <input
            name="todo"
            type="text"
            value=''
            placeholder="please enter the task"
            value={todo}
            onChange={handleInputChange}
          />
          
        </form>
          <DataList data={todos}/>
       
      </div>
    )
}

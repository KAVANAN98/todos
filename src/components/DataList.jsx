import React from 'react'

export default function DataList(props) {
    return (
        <div>
            <ul className="todo-list">
          {/* map over the todos array which creates a new li element for every todo
          (make sure to add the "key" prop using the unique todo.id value to the li element)
          remember this is an array of objects - so we need to access the property 
          "text" to get the value we want to display */}
          {props.data.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
        </div>
    )
}

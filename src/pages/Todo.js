import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, setComplete, getTodos } from "../libs/todoSlice";
export function Todo() {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState("");
  return (
    <>
      {todos.map((todo, idx) => (
        <div key={idx}>
          <p>{todo.title}</p>
          <button onClick={() => dispatch(setComplete(todo.id))}>Done</button>
        </div>
      ))}
      <div>
        <input type="text" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
        <button
          onClick={() =>
            dispatch(
              addItem({
                title: todoTitle,
                completed: false,
              })
            )
          }
        >
          Add
        </button>
      </div>
      {JSON.stringify(todos)}
    </>
  );
}

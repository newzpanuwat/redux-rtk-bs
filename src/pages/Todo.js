import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, setComplete, getTodos } from "../libs/todoSlice";
import styled from "styled-components";

export function Todo() {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState("");

  return (
    <>
      <Title>Redux RTK</Title>
      <FormInput>
        <input type="text" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
        <Button
          onClick={() =>
            dispatch(
              addItem({
                title: todoTitle,
                completed: false,
              })
            )
          }
        >
          Add Items
        </Button>
      </FormInput>
      {todos.map((todo, idx) => (
        <FormInput key={idx}>
          <span>
            {idx + 1}: {todo.title} &nbsp;
            <button onClick={() => dispatch(setComplete(todo.id))}>Done</button>
          </span>
        </FormInput>
      ))}
      {JSON.stringify(todos)}
    </>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const FormInput = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background: palevioletred;
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

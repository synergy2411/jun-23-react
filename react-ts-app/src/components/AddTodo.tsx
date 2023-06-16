import React, { FormEvent, useRef } from "react";
import { TodoItem } from "../model/Todo";

const AddTodo: React.FC<{ onAddTodo: (item: TodoItem) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    let newTodo: TodoItem = {
      id: Math.random().toString(),
      label: inputRef.current!.value,
    };
    props.onAddTodo(newTodo);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="label" ref={inputRef} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;

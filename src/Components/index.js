import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
const TodoMain = () => {
  const [inputText, setInputText] = useState("");
 
  console.log(inputText, "inputText");
  return (
    <div className="container-form-todo">
      <Form
        inputText={inputText}
        setInputText={setInputText}
      
      />

      <TodoList  />
    </div>
  );
};
export default TodoMain;

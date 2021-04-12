import React, { useContext } from "react";
import Todo from "./Todo";
import { DataContext } from "../Context/context";
const TodoList = () => {
  const [todo, setTodo] = useContext(DataContext);
  const handleEditTols = (editeValue , id)=>{
    const newTodo = [...todo]
    newTodo.forEach((item, index)=>{
        if(index === id ){
        item.text = editeValue
        }
      
    })
    setTodo(newTodo)
  }
  return (
    <div className="todo-container">
      <ul>
        {todo.map((item, index) => (
          <Todo 
          text={item.text} 
          todo={todo} setTodo={setTodo} 
          item={item} id={index} 
          handleEditTols={handleEditTols} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

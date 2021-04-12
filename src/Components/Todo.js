import React, { useState } from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from '@material-ui/icons/Save';
const Todo = ({ text, item, todo, setTodo, handleEditTols }) => {
    const [editeInput,setEditInput] = useState(false)
    const [editeValue,setEditValue] = useState(text)
  const handleClickDelete = () => {
    setTodo(todo.filter((el) => el.id !== item.id));
  };
  const handleCheckedClick = () => {
    setEditInput(true)
  };
  const handlesaveClick = (id)=>{
    setEditInput(false)
    if(editeValue){
        handleEditTols(editeValue, id)
    }else{
        setEditValue(text)
    }
  }
  if(editeInput){
    return (
        <div className="todo-list">
          <li className={`list-item `}>
            <input value={editeValue} style={{ height: "30px", border: "none",width:'400px' }} onChange={(e)=>setEditValue(e.target.value)}/>
          </li>
          <div>
            <button className="btn-checked" onClick={(id)=>handlesaveClick(id)}>
              <SaveIcon  />
            </button>
            <button className="btn-delete" onClick={handleClickDelete}>
              {" "}
              <DeleteIcon />
            </button>
          </div>
        </div>
      ); 
  }else{
    return (
        <div className="todo-list">
          <li className={`list-item ${item.complete ? "disable" : ""}`}>
            <input value={text} style={{ height: "30px", border: "none" }} />
          </li>
          <div>
            <button className="btn-checked" onClick={handleCheckedClick}>
              <EditIcon />
            </button>
            <button className="btn-delete" onClick={handleClickDelete}>
              {" "}
              <DeleteIcon />
            </button>
          </div>
        </div>
      ); 
  }

};
export default Todo;

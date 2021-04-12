import React, { useEffect, useState, createContext } from "react";

export const DataContext = createContext();
export const DataProvider = (props) => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const todoString = JSON.parse(localStorage.getItem("todoString"));
    if (todoString) setTodo(todoString);
  }, []);
  useEffect(() => {
    localStorage.setItem("todoString", JSON.stringify(todo));
  }, [todo]);

  return (
    <div>
      <DataContext.Provider value={[todo, setTodo]}>
        {props.children}
      </DataContext.Provider>
    </div>
  );
};

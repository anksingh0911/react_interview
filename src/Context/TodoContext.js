import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todoList:[],
  addTodoList:(todo)=>{},
  updateTodoList:(id, todo)=>{},
  removeTodoList:(id)=>{},
  isComplete:(id)=>{}
});

export default function Todos(){
 return useContext(TodoContext)
};

export const TodoProvider = TodoContext.Provider;
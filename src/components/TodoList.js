import { isEditable } from '@testing-library/user-event/dist/utils';
import React, {useContext, useEffect, useState} from 'react';
import Todos from '../Context/TodoContext';


const TodoList = ({data}) => {
  const {todoList, removeTodoList, updateTodoList, isComplete} = Todos();
  const [isEdit, setIsEdit]  = useState(false);
  const [newTodo, setNewTodo]=useState();
  
  const handleClick= (e, id)=>{
    // eslint-disable-next-line no-unused-expressions
    if(e.key === "Enter"){
      updateTodoList(id, newTodo)
      setIsEdit(false)
    }
  }
  

  if(!data) return null;

  return (
    <div className='flex flex-wrap gap-2 justify-center my-3'>
        {data?.map((item)=>(
          <div key={item.id} className={`${item.complete === true ? "bg-green-400" : "bg-gray-100"} w-[25%] flex items-center border border-gray-200 justify-between p-2`}>
            <div className='flex items-center'>
              <input type="checkbox" onChange={()=> isComplete(item.id)}/>
              {!isEdit && (
              <p className='text-gray-800 mx-1'>{item.name}</p> 
              )}
              {isEdit && (
                <input type="text" className="border-none" value={newTodo || item.name} onChange={(e)=> setNewTodo(e.target.value)} onKeyDown={(e)=> handleClick(e, item.id)}/>
              )}
            </div>
            <div>
            <button className='rotate-90 p-1' 
              onClick={()=> setIsEdit(true)}>✏</button>
            <button className='text-red p-1' onClick={()=>removeTodoList(item?.id)}> ✖  </button>
            </div>
            
          </div>
        ))}
    </div>
  )
}

export default TodoList
import React, {useState, useEffect} from 'react'
import Todos from '../../Context/TodoContext';

const TodoItem = ({data}) => {
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
  return (
    <div key={data.id} className={`${data.complete === true ? "bg-green-400" : "bg-gray-100"} w-[25%] flex items-center border border-gray-200 justify-between p-2`}>
            <div className='flex items-center'>
              <input type="checkbox" onChange={()=> isComplete(data.id)}/>
              {!isEdit && (
              <p className='text-gray-800 mx-1'>{data.name}</p> 
              )}
              {isEdit && (
                <input type="text" className="border-none h-full" value={newTodo || data.name} onChange={(e)=> setNewTodo(e.target.value)} onKeyDown={(e)=> handleClick(e, data.id)}/>
              )}
            </div>
            <div>
              {!isEdit ? (
                <button className='rotate-90 p-1' 
                onClick={()=> setIsEdit(true)}>
                  ✏
                </button>
              ):(
                <button className='rotate-90 p-1' onClick={()=> { updateTodoList(data?.id, newTodo)
                  setIsEdit(false)}}>
                  🏬 
                </button>
              )
            }
            <button className='text-red p-1' onClick={()=>removeTodoList(data?.id)}> ✖  </button>
            </div>
            
          </div>
  )
}

export default TodoItem
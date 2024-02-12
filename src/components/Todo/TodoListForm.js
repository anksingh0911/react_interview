import React, {useContext, useState} from 'react';
import Todos from '../../Context/TodoContext';

export const TodoListForm = () => {
  
  const { addTodoList } = Todos();
  const [todoItem, setTodoItem] = useState({
      id:'',
      name:'',
      complete: false
  });
  return (
    <div className='flex justify-center'>
      <input type="text" placeholder="Enter todo name" className='border border-gray-200 rounded-md p-2' onChange={(e)=> setTodoItem({...todoItem, id:Date.now(), name:e.target.value})}/>
      <button className='border border-gray-200 bg-green-500 rounded-md p-2' onClick={()=> addTodoList(todoItem)}>
        Add
      </button>
    </div>
  )
}


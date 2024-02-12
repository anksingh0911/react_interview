import { isEditable } from '@testing-library/user-event/dist/utils';
import React, {useContext, useEffect, useState} from 'react';
import Todos from '../../Context/TodoContext';
import TodoItem from './TodoItem';


const TodoList = ({data}) => {
  
  if(!data) return null;

  return (
    <div className='flex flex-wrap gap-2 justify-center my-3'>
        {data?.map((item,index)=>(
          <TodoItem data = {item}/>
        ))}
    </div>
  )
}

export default TodoList
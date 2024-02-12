import './App.css';
import CountdownTimer from './components/CounterDownTimer';
import Login from './components/Login';
import PasswordGenerator from './components/PasswordGenerator';
import Products from './components/Products';
import Profile from './components/Profile';
import UserContextProvider from './Context/UserContextProvider';
import {ThemeProvider} from './Context/ThemeContext'
import { useState , useEffect} from 'react';
import { TodoProvider } from './Context/TodoContext';
import TodoList from './components/Todo/TodoList';
import { TodoListForm } from './components/Todo/TodoListForm';
import Carousel from './components/Carousel/Carousel';


function App() {
  const [defaultTheme, setDefaultTheme] = useState('light');
  const [todoList, setTodoList] = useState([]);

  const darkMode =()=>{
    setDefaultTheme('dark')
  }

  const lightMode=()=>{
    setDefaultTheme('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(defaultTheme)
  }, [defaultTheme])
  
  useEffect(()=>{
    let todos = JSON.parse(localStorage.getItem('todos'));
    if(todos && todos.length >0) {
      setTodoList(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todoList))
  },[todoList])

  // todo list creating
  const addTodoList=(todo)=>{
   setTodoList((prev)=>[...prev, todo])
  }
  const removeTodoList=(id)=>{
    setTodoList(prev => prev.filter((todoItem)=> todoItem.id !== id))
  }
  const updateTodoList = (id, todo)=>{
    setTodoList(prev => prev.map((todoItem)=> todoItem.id === id ? {...todoItem, name:todo} : todoItem))
  }

  const isComplete =(id)=>{
    setTodoList(prev => prev.map((todoItem)=> todoItem.id === id ? {...todoItem, complete: !todoItem.complete} : todoItem))
  }

  return (
    <>
      <CountdownTimer/>
      <PasswordGenerator/>
      <Products/>
      <UserContextProvider>
        <h1 className='text-center text-lg my-3'>Context Api useContext hooks</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
      <ThemeProvider value={{defaultTheme, darkMode, lightMode}}>
        <button className='bg-green-500 m-2 p-1' onClick={()=>lightMode()}>Light</button>
        <button className='bg-green-500 m-2 p-1' onClick={()=>darkMode()}>Dark</button>
        <div className='border border-gray-200 bg-white w-[200px] h-[300px] dark:bg-gray-700'>
          <p className='text-gray-500 dark:text-white'>Hello</p>
        </div>
      </ThemeProvider>
      <TodoProvider value={{todoList, addTodoList, removeTodoList,updateTodoList,isComplete}}>
        <TodoListForm/>
        <TodoList data={todoList}/>
      </TodoProvider>
      <Carousel/>
    </>
  );
}

export default App;

import React,{useState, useContext} from 'react';
import UserContext from '../Context/UserContext';

const Login = () => {

  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const {setUser} = useContext(UserContext);

  const handleSubmit=(e)=>{
    e.preventDefault()
    setUser({userName, password})
  }
  return (
    <div className='border border-gray-200 w-[25%] mx-auto p-3 rounded-md bg-slate-100 dark:bg-gray-700'>
      <h2 className='text-xl text-center mb-3 font-semibold'>Login</h2>
      <input className='p-2 border rounded-md mb-2 w-full text-md' type="text" placeholder="Enter user name" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
      <input className='p-2 border rounded-md mb-2 w-full text-md' type="password" placeholder="Enter Your password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
      <button className='block text-center p-2 my-2 bg-green-600 w-full rounded-md text-white' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
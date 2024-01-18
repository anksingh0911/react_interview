import React, { useState,useEffect, useCallback, useRef } from 'react'

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [isNumber,  setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [password, setPassword] = useState();

  // useRef
  let passwordRef = useRef(null);

  const passwordGenerator = useCallback(() =>{
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newPass= "";
    if(isNumber) str += "0123456789";
    if(isCharacter) str += "!@#$%^&*+-[]";
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length);
      newPass += str.charAt(char)
    }
    setPassword(newPass)
  },[length, isNumber, isCharacter])

  useEffect(() => {
    passwordGenerator()
  }, [length, isNumber, isCharacter, passwordGenerator])
  
  const copyToClipboard = ()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(passwordRef.current.value)
  }

  return (
    <div className='p-3 bg-gray-800 w-full text-center'>
        <h1 className='mb-2 text-white text-2xl'>Password Generator</h1>
        <div className='mb-2'>
          <input 
            className='w-[20%] rounded-l-md text-md p-2'
            type="text" 
            value={password} 
            placeholder="Enter Password"
            readOnly
            ref={passwordRef}
            // onChange={(e)=>setPassword(e.target.value)}
          />
          <button 
          className='p-2 text-white rounded-r-md bg-blue-500 text-md hover:bg-blue-800'
          onClick={()=>copyToClipboard()}
          >
            Copy
          </button>
        </div>
        <div className='flex justify-center items-center'>
          <input
            type="range"
            min="1"
            max="20"
            value={length}
            onChange={(e)=> setLength(e.target.value)}
          />
          <p className='text-sm text-white mx-2'>Length : {length}</p>
          <input  className='ml-2' type="checkbox" id="number" name="number" value="number" onChange={(e)=>setIsNumber(e.target.checked)}/>
          <label className='ml-2 text-white text-sm' for="number"> Number</label>
          <input className='ml-2' type="checkbox" id="character" name="character" value="character" onChange={(e)=>setIsCharacter(e.target.checked)}/>
          <label className='ml-2 text-white text-sm' for="character"> Character</label>
        </div>
    </div>
  )
}

export default PasswordGenerator
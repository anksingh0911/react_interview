import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [countdown, setCountdown] = useState(100000);
  const [isRunning, setIsRunning] = useState(true);

  const days = Math.floor(countdown/(24*3600))
  const hours = Math.floor((countdown % (24*3600))/3600);
  const minute = Math.floor((countdown % 3600)/60);
  const seconds = countdown % 60;
  let interval;

  useEffect(()=>{
    if(isRunning){
       // eslint-disable-next-line react-hooks/exhaustive-deps
       interval = setInterval(()=> {
        if(countdown > 0){
          setCountdown(countdown - 1)
        }else{
          clearInterval(interval)
        }
      },1000)
    }else{
      clearInterval(interval)
    }
      return ()=> clearInterval(interval)
  },[countdown, isRunning]);

  const handleStartStop = ()=>{
    setIsRunning(!isRunning)
    clearInterval(interval)
  }

  const handleReset = ()=>{
    setCountdown(100000)
    clearInterval(interval)
  }

  return (
    <div className='p-4 w-full bg-gray-50 text-center'>
      <h1 className='text-2xl font-semibold'>Countdown Timer</h1>
      <p className='text-md p-2 text-gray-500'> 
      {days} days : {hours} hrs: {minute} min : {seconds} sec
      </p>
      <button className={`p-1 px-3 rounded-md mr-2 text-md text-white ${isRunning ? 'bg-red-500' : 'bg-green-500'}`} onClick={handleStartStop}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button className='p-1 px-3  rounded-md bg-gray-500 text-md text-white' onClick={handleReset}>Reset</button>
    </div>
  );
}
export default CountdownTimer;

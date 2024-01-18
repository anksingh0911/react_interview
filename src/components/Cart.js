import React, { useEffect, useState } from 'react'

const Cart = ({state, dispatch}) => {
  const [total, setSubTotal] =useState(0)
  const {cart} = state

  const changeQty = (id, qty)=>{
      dispatch({
        type:"change_quantity",
        payload: {id, qty}
      })
  }
  useEffect(()=>{
      setSubTotal(cart?.reduce((acc, curr)=> acc + (Number(curr.price)* Number(curr.qty)),0))
  },[cart])

  return (
    <div className='p-2'>
      <p>SubTotal : {total}</p>
      {state?.cart?.map((pdt)=>(
        <div key={pdt?.id} className='flex mb-2 shadow-md p-2'>
          <img className='w-[50px] mr-1 p-2' src={pdt?.images[0]} alt='thumbnailImage'/>
          <div>
            <p className='text-sm mr-1 text-gray-600'>{pdt?.title}</p>
            <p className='text-sm mr-1 text-gray-600'>{pdt?.price}</p>
            <div>
              <button className='px-2 py-1 text-white rounded-full bg-slate-700' onClick={()=>changeQty(pdt?.id, pdt?.qty-1)}>-</button>
              <span className='text-sm px-2 font-semibold'>{pdt.qty}</span>
              <button className='px-2 py-1 text-white rounded-full bg-slate-700' onClick={()=>changeQty(pdt?.id, pdt?.qty+1)}>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>  
  )
}

export default Cart
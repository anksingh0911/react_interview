import React from 'react'

const Product = ({data, state, dispatch}) => {
  const { title, images, price} = data;
  return (
    <div className='p-2 m-1 shadow-md'>
        <img src={images[0]} className="mx-auto w-[150px] h-[150px] mb-2" alt="thumbnail Images"/>
        <p className='text-gray-500 text-sm'>{title}</p>
        <p className='text-gray-500 text-sm'>{price}</p>
        {(state?.cart.some((p)=> p?.id === data?.id) ? (
          <button className='w-auto bg-red-600 px-2 py-1 text-white text-sm rounded-md'
          onClick={()=>dispatch({
            type: "remove_from_cart",
            payload:data
          })}
          >
            Remove from cart
          </button>
        ):(
          <button className='w-[50%] bg-green-600 px-2 py-1 text-white text-sm rounded-md'
            onClick={()=>dispatch({
              type: "add_to_cart",
              payload:data
            })}
          >
            Add To Cart
          </button>
        ) )}
        
    </div>
  )
}

export default Product
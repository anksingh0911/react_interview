import React, { useEffect, useState, useReducer } from 'react'
import Product from './Product'
import { cartReducer } from '../reducers/cartReducer';
import Cart from './Cart';

const Products = () => {

  const [productData, setProductData] = useState()
  const [state, dispatch] = useReducer(cartReducer,{
    cart:[]
  })

  useEffect(()=>{
    getProducts()
  },[])

  const getProducts = async ()=>{
    const data = await fetch("https://dummyjson.com/products")
    const json = await data.json()
    setProductData(json.products)
  }

  if(productData?.length === 0 ) return null
  return (
    <div className='flex'> 
      <div className='w-[80%]'>
        <h1 className='text-lg text-center font-semibold'>Product List</h1>
        <div className='grid grid-cols-5 gap-3 p-3 bg-gray-100'>
          {productData?.map((item)=>(
            <Product key={item?.id} data={item} state={state} dispatch={dispatch}/>
          ))}
        </div>
      </div>
      <div className='w-[20%]'>
        <h1 className='text-lg text-center font-semibold'>Cart</h1>
        <Cart state={state} dispatch={dispatch}/>
      </div>
    </div>
  )
}

export default Products
import React from 'react'
import {agriItems} from '../Data/agriItems'
import Cart from './Cart'
import Features from './Features'
import { useState } from 'react'
const Items = () => {
    
    const [cart,setCart]=useState([])
    const [selecteditem,setSelecteditem]=useState(null)
    const [servings, setServings] = useState(1);
    const [deliveryTime,setDeliveryTime]=useState(5)

    const onClickAdd=(item)=>{
        setSelecteditem(item)
        setDeliveryTime(5);

    }
    const cancel=()=>{
        setSelecteditem(null);
    }

    const addtoCart = (item) => {
        const servingsNeeded = Math.ceil(servings / item.serves);
        console.log(servingsNeeded)
        const itemToAdd = {
          ...item,
          requestedPersons: servings,
          quantity: servingsNeeded,
          price: item.price * servingsNeeded,
          deliverytime: deliveryTime
        };
        console.log(item.price)
      
        const index = cart.findIndex(cartItem => cartItem.id === item.id);
      
        if (index === -1) {
          setCart(prev => [...prev, itemToAdd]);
        } else {
          const updatedCart = [...cart];
          updatedCart[index] = {
            ...updatedCart[index],
            quantity: updatedCart[index].quantity + servingsNeeded,
            requestedPersons: updatedCart[index].requestedPersons + servings,
            price: updatedCart[index].price + itemToAdd.price,
          };
          setCart(updatedCart);
        }
      
        setSelecteditem(null);
        setServings(1);
        setDeliveryTime(5);
        console.log(cart)
      };
      

  return (
    <>
    <div className='pl-10 font-bold text-3xl font-poppins py-10'>Popular Items</div>
    <hr className='border-t-1 border-black'></hr>
    <div className='w-full px-20 pt-5 bg-gray-200 font-poppins'>
        <div className='flex flex-row justify-evenly pb-10 flex-wrap gap-5'>
            {agriItems.map(item=>(
                <div key={item.id} className='flex flex-col items-start gap-4 p-6 bg-white rounded-2xl shadow-lg'>
                    <div>
                    <img src={item.image} height={'150px'} width={'200px'} alt='image' className='rounded-xl'></img>
                    </div>
                    <div className='text-md'>
                        {item.name}
                    </div>
                    <div className='text-md'>
                        Rs.<spam className="font-bold">{item.price}</spam>
                    </div>
                    <div className='flex items-center'>
                        <button onClick={()=>onClickAdd(item)} className='bg-green-600 text-md p-2 rounded-2xl text-white'>Add to Cart</button>
                    </div>
                    {selecteditem?.id === item.id && (
                        <div className='w-60 h-60 absolute bg-slate-300 rounded-lg shadow-lg flex justify-center items-center flex-col  gap-2'>
                            <div className='flex justify-center flex-col'>
                                <div>
                                    <label>Number of People to Serve:</label>
                                </div>
                                <div>
                                    <input type='number' className='w-full rounded-md' min='1' value={servings} onChange={(e)=> setServings(parseInt(e.target.value))}></input>
                                </div>
                                
                            </div>
                            <div className='w-full flex justify-center flex-col'>
                                <div className='flex justify-center'>
                                    <label>Delivery After:</label>
                                </div>
                                <div className='w-full flex justify-center'>
                                    <input className='rounded-md' type='number' min='5' placeholder='Hourse' value={deliveryTime} onChange={(e)=>setDeliveryTime(parseInt(e.target.value))}></input>
                                </div>
                            </div>
                            <div className='flex justify-between flex-row gap-5 pt-4'>
                                
                                <button className='bg-green-600 rounded-md shadow-lg p-2' onClick={() => addtoCart(selecteditem)}>Add</button>
                                <button className='bg-red-500 rounded-md shadow-lg p-2' onClick={cancel}>Cancel</button>
                            </div>
                        </div>
                        
                    )}
                </div>
            ))}
            
        </div>
        
    </div>
    <hr className='border-t-1 border-black'></hr>
    </>
   
  )
}

export default Items
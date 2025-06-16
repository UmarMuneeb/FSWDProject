import React from 'react'
import { tobaccoListings } from '../Data/agriItems'
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
        
        
    </div>
    <hr className='border-t-1 border-black'></hr>
    </>
   
  )
}

export default Items
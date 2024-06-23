import React, { useContext,useReducer} from 'react'
import { createContext } from 'react'
import {faker} from '@faker-js/faker'
import CartReducer from './Reducer'



faker.seed(99)

const Cart = createContext()

const ContextProvider = ({children}) => {

  const Products = [...Array(20)].map(()=>({
     id:faker.string.uuid(),
     name:faker.commerce.productName(),
     price:faker.commerce.price(),
     image:faker.image.urlLoremFlickr({category:'Products'}),
    //  inStock:faker.random.arrayElement(0,3,5,6,7),
     decription:faker.commerce.productDescription(),
     fastDelivery:faker.datatype.boolean(),
    //  ratings:faker.random.arrayElement([1,2,3,4,5])
  })
);


 const [state ,dispatch] = useReducer(CartReducer,{
  Products : Products,
  cart : [],
 });



  return (
    <Cart.Provider value={{state,dispatch}} key={Products.id}>{children}</Cart.Provider>
  )
}

export default ContextProvider

export const CartState =()=>{
   return  useContext(Cart)
   
  }



import{CartState} from '../Context'


const SingleProduct = () => {
   
    const {state: {cart}, dispatch}= CartState();
    const {state: {Products} } = CartState();
  return (
   <>
       <div className='sm:w-[75%] h-screen max-h-screen flex flex-wrap gap-4  items-center justify-center w-fit pr-4'>
        {
            Products.map((prod)=>{
                return(
                    <>
            <div className='w-72 h-fit p-2 rounded-md flex  flex-col bg-white ' key={prod.id}>
                  <img src={prod.image} alt={prod.name} className='w-full h-48'/>
                   <span className='text-black font-medium'>{prod.name}</span>
                   <span className='text-black mt-2 w-[272px] h-[120px] items-center'>{prod.decription}</span>
                   {
                    prod.fastDelivery ? (
                      <span className='text-black mt-2  items-center'>Fast Delivery</span>
                    ):(<span className='text-black mt-2 h-[24px] w-[272px]  items-center' ></span>)
                   }

                   <span className='text-black mt-2'>₹ {prod.price.split(".")[0]}

                   </span>

{
  cart.some((p)=>p.id===prod.id)  ? (<button className='w-fit h-fit px-3 py-2 text-white hover:text-red-500 hover:bg-white hover:ring-1 hover:ring-red-600 font-medium bg-red-500 mt-2' onClick={()=>{
    dispatch({
        type:"REMOVE_FROM_CART",
        payload:prod
    })
  }}>Remove To Cart</button>):(<button className='w-fit h-fit px-3 py-2 text-white hover:text-blue-600 hover:bg-white hover:ring-1 hover:blue-red-600 font-medium bg-blue-500 mt-2' onClick={()=>{dispatch({
    type:"ADD_TO_CART",
    payload:prod
  })}}>Add To Cart</button>)
}
</div>
    </>
 )
})
}
    </div>

      

   </>
  )
}

export default SingleProduct
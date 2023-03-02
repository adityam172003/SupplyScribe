import { useSelector,useDispatch } from "react-redux";
import {remToCart,addToCart,remComp} from "../Store/CartSlice/CartSlice"
import { getTodoAsync } from "../Store/CartSlice/CartSlice";
function Cart()
{    const dispatch = useDispatch()
    const menues = useSelector((state)=>state.cart)
   
    return(
        <>
        <h1>AddToCart</h1>
      
        {
        menues.data.map(it =>(
            <div key = {it.menu_id}>

            <h2>Menu Name  : {it.menu.menu_name}</h2>
            <h3>Menu Price : {it.menu.menu_prise} </h3>
            <h4>Quantity   : {it.qty}</h4>
            <button onClick={()=>{
                dispatch(remComp({...it.menu}))
            }}>Remove</button>  
            <button onClick={()=>{
                dispatch(addToCart(it.menu))
            }}>+</button>
           <button onClick={()=>{
            dispatch(remToCart({...it.menu}))
           }}>-</button>
            <hr></hr>
            </div>

        ))
       }
        <h2>Total items : {menues.total_items}</h2>
        <h2>Total price : {menues.price}</h2>
        <button onClick={()=>{
           dispatch(getTodoAsync(menues));
            console.log("hit")
        }}>Place order</button>
        
        </>
    )
}

export default Cart
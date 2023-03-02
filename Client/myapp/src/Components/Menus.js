import data from '../Menu.json'

import {useDispatch } from 'react-redux'
import {addToCart} from '../Store/CartSlice/CartSlice'

function Menus()
{   const menus= data.Menu
 
    const dispatch = useDispatch()
    return (
        <>
        <h1>MENUE</h1>

       
       {

        menus.map(it =>(
            <div key = {it.menu_id}>

            <h2>Menu Name  : {it.menu_name}</h2>
            <h3>Menu Price : {it.menu_prise} </h3>
            <button onClick={()=>{
                dispatch(addToCart(it))
            }}>Add to cart</button>
            <hr></hr>
            </div>

        ))
       }


      
        </>
    )
}
export default Menus
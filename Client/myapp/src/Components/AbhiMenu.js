import '../products.css'

import data from '../Menu.json'

import { useSelector, useDispatch } from 'react-redux'
import {addToCart} from '../Store/CartSlice/CartSlice'
import { Link } from 'react-router-dom'






function Abhimenu()
{
    const menus = data.Menu

    const dispatch = useDispatch()
    return (
        <>
              <section id="gallery">
            {

                menus.map(it => (
                   
                      
                            <div class="cart">
                                <div class="prod_img" key={it.menu_id}>
                                    <img src="pen.jpg" alt="pen" width="240px" height="240px"/> 
                                </div>
                                <div class="prod_detail">
                                    <p class="product_name">{it.menu_name}</p>
                                    <p class="product_price"><sup>₹</sup><sub>{it.menu_prise}</sub></p>
                                    <p class="availability">Available</p>
                                    <div class="options">
                                        
                                        <button  class="add_cart" onClick={() => {
                                            dispatch(addToCart(it))
                                        }}></button>
                                        <button class="feedbacks"></button>
                                    </div>
                                </div>
                            </div>
                       
                       

                     
                   

                ))
            }
     </section>


        </>
    )
}


export default Abhimenu
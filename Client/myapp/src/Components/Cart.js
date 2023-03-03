import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remToCart, addToCart, remComp } from "../Store/CartSlice/CartSlice"
import { getTodoAsync } from "../Store/CartSlice/CartSlice";
import '../my_cart.css'
function Cart() {
    const [resp, setresp] = useState(0);
    const [addresp, setaddresp] = useState(0);
    const dispatch = useDispatch()
    const menues = useSelector((state) => state.cart)
    menues.data.map(it => {
        if (it.qty === 0) {
            dispatch(remComp(it.menu));
        }
    })
    return (

        <>
        
            <section id="table_gallery">
                <h2>My Orders</h2>
                <section id="main_table">
                    <table>
                        <thead>
                            <tr>
                                <th id="srno">Sr.No.</th>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Available</th>
                                <th>Quantity</th>
                                <th >Total Price</th>
                            </tr>
                        </thead>

                        {
                            menues.data.map(it => (

                                <tr class="content" key={it.menu_id}>
                                   
                                    <td class="sr_no">1</td>
                                    <td class="item_name">{it.menu.menu_name}</td>
                                    <td class="item_price">{it.menu.menu_prise}</td>
                                    <td class="item_avai">{it.menu.Available}</td>

                                    {/* <td className="qu" ><div class="qt_no">{it.qty}</div><button onClick={() => {  dispatch(remToCart({...it.menu})) }} class="dec">-</button> <button onClick={() => { dispatch(remComp({...it.menu})) }} class="it_rmv"></button></td> */}
                                    <td class="item_qty"><button class="inc" id="q" onClick={ ()=>{dispatch(addToCart(it.menu))}}>+</button><div class="qt_no">{it.qty}</div><button onClick={() => {  dispatch(remToCart({...it.menu})) }} class="dec">-</button> <button onClick={() => { dispatch(remComp({...it.menu})) }} class="it_rmv"></button></td>
                                    <td class="item_total">{it.sing_price}</td>
                                </tr>


                            ))
                        }



                        


                    </table>
                </section>
            </section>

            <section id="order_detail">
                <h2>Order Summary</h2>
                <div id="summary">
                    <div>Total Items</div>
                    <div class="money" id="total_items">{menues.total_items}</div>
                    <div>Total Price</div>
                    <div class="money" id="total_price"><sup>₹</sup><sub>{menues.price}</sub></div>
                </div>
                <button onClick={() => {
                    dispatch(getTodoAsync(menues))

                }} id="submit">Place Order</button>
            </section>

        </>
        
        
    )
        
}



export default Cart
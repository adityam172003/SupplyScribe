import axios from "axios"

import { useState, useEffect } from "react";
import '../order_confirm.css';

export default function UserCart() {
    const [items, setItems] = useState([]);
    const [info, setinfo] = useState([])
    const id = 1020929320

    const fetch_Data = async () => {

        const resp = await axios.get(`/user/cart/${id}`)
        console.log("in the user cart", resp);



        setItems(resp.data)

    }


    useEffect(() => {
        fetch_Data();
    }, [])

    console.log("user cart ,", items)
    let pr = 0, ord = 0;
    return (



        <section id="full_cont">
            <section id="container">
                <div id="heading">
                    <img src="logo.png" alt="" width="60px" height="60px" />
                    <h2>PICT STATIONARY</h2>
                </div>

                <div id="main_content">
                    <div id="content">
                        <p id="order_status"><em>Your Order Confirmed!</em></p>
                        <h2>Hello, RAHUL</h2>
                        <p id="order_message">You order has been confirmed and will be shipped soon!</p>
                    </div>


                    <div id="content">
                                                <div><h2>Order Date</h2><span>5 March,2023</span></div>
                                                <div><h2>Roll No</h2><span id="order_rollno">21160</span></div>
                                                <div><h2>Order No</h2><span id="order_no">{ord += 1}</span></div>
                              </div>

                    {

                        items.map((it) => (
                            <>
                            <div id="main_content">
                            <div id="order_detail">
                            
                              
                                                    <p id="order_status"><em>Your Order Confirmed!</em></p><br></br>
                                                        <h2>Hello, RAHUL</h2>
                                                        <p id="order_message">You order has been confirmed and will be shipped soon!</p>
                                 </div>
                                {

                                    it.data.map(itm => (

                                        <>
                                            <hr></hr>
                                            
                                           
                                              
                                          
                                          
                                            <hr></hr>
                                            <div id="order_items">
                                               
                                                <div class="item_info">
                                                    <div class="item_name_qt">
                                                        <h2>{itm.menu.menu_name}</h2>
                                                        <span>Quantity : <span class="item_qt"> {itm.qty}</span></span>
                                                    </div>
                                                    <h2 class="item_price"><sup>₹</sup><sub>{itm.menu.menu_prise}</sub></h2>
                                                    <h2>total orde Bill: {pr += it.price}</h2>
                                                    <h1>order status : {it.orderStatus}</h1>
                                                </div>
                                           </div>
                                        </>
                                    ))

                                }






                                <hr></hr>
                                <div id="order_smry">
                                    <div>
                                        <h2>Total Items</h2>
                                        <span id="total_items">{it.total_items}</span>
                                    </div>
                                    <div>
                                        <h2>Total Price</h2>
                                        <span id="total_price"><sup>₹</sup><sub>{pr}</sub></span>
                                    </div>
                                </div>
                                <hr></hr>


                                </div>

                            </>

                        ))

                    }




                </div>
                <br></br>
                <p>Thank you for shoping with us !</p>

                <br></br>

            </section>

        </section>


    )
}













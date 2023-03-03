import axios from "axios"

import { useState,useEffect } from "react";


export default function UserCart() {
    const [items ,setItems] = useState([]);
    const [info , setinfo] = useState([])
    const id = 1020929320

    const fetch_Data = async ()=>{
        
        const resp = await axios.get(`/user/cart/${id}`)
        console.log("in the user cart",resp);
       
        
        
        setItems(resp.data)
    
    }

    
    useEffect(()=>{
        fetch_Data();
    },[])

    console.log( "user cart ,", items)
    let pr=0,ord=0;
    return (


        <>

        <h1>Your orders </h1>
        
        {
            items.map((it)=>(
                <>
                <h1>Order No: {ord+=1}</h1>
                {   
                    
                    it.data.map(itm =>(
                        
                        <>
                        <h1>itme name : {itm.menu.menu_name}</h1>
                        <h2>item price : {itm.menu.menu_prise}</h2>
                        <h2>Quantity : {itm.qty}</h2>
                        </>
                    ))
                }
                <h1>order status : {it.orderStatus}</h1>
                
                <h2>total orde Bill: {pr+=it.price }</h2>
                
                <h2>Quantity   : {it.total_items}</h2>
                </>
            ))
        }

        <h1>total bill : {pr}</h1>

    
        </>

    )
}
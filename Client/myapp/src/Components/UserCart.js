import axios from "axios"

import { useState,useEffect } from "react";


export default function UserCart() {
    const [items ,setitems] = useState([]);
    const id =1002020238298

    const fetch_Data = async ()=>{
        
        const resp = await axios.get(`/user/cart/${id}`)
        console.log(resp.data);
       
        setitems(resp.data)
        
    }

    
    useEffect(()=>{
        fetch_Data();
    },[])

    return (


        <>
        
        </>

    )
}
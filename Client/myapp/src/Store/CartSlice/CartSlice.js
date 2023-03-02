
import {createSlice} from "@reduxjs/toolkit"
import axios from 'axios'



const initialState = {
    price :0,
    orderStatus:'in Queue',
    total_items:0,
    data :[{
        menu:{},
        qty:0
    }]
}


const cartSlice  = createSlice({
    name :'cart',
    initialState,
    reducers :{
        addToCart : (state,action)=>{
           
            const obj = state.data.find(({menu})=> menu.menu_id === action.payload.menu_id);
           
            if(obj)
            {
                state.data.find(({menu})=> menu.menu_id === action.payload.menu_id).qty++;

            }
            else
            {
                state.data.push({...state.data , menu:action.payload,qty:1})
            }
            state.price = state.price + parseInt(action.payload.menu_prise);
            state.total_items++;
        },
        remToCart : (state,action)=>{

        
            var obj= state.data.find((data) => data.menu.menu_id === action.payload.menu_id);
            console.log(obj)
             
            if(obj.qty<=1)
            {
                state.data.pop(obj);
            }
            else
            {
                obj.qty--;
                if(obj.qty<=0)
                {
                     state.data.pop(obj);
                }
            }
          
            state.price = state.price - parseInt(action.payload.menu_prise);
            state.total_items--;
            if(state.total_items===0){
                state.price=0
            }
            if(state.total_items<0)
            {
                state.total_items=0;
                state.price=0
            }
        },

        remComp :  (state,action)=>{

        
            var obj= state.data.find((data) => data.menu.menu_id === action.payload.menu_id);
            console.log(obj)
            const  pr = obj.qty
            state.data.pop(obj);
            state.price = state.price -( parseInt(action.payload.menu_prise)*pr);
            state.total_items-= pr;
            if(state.total_items===0){
                state.price=0
            }
            if(state.total_items<0)
            {
                state.total_items=0;
                state.price=0
            }

        },

    },

    
})



export const getTodoAsync = (data1) => async (dispatch) => {
    try {
        
        const user_id = 1020929320;
        const response = await axios.post('/user/order' , {user_id,data1});
        
        if(response)
        {
            console.log('response from backend ',response);
        }
    } catch (err) {
      throw new Error(err);
    }
  };
  


export default cartSlice.reducer  
export const {addToCart,remToCart,remComp} = cartSlice.actions




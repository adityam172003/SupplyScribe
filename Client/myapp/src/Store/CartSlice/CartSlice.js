
import {createSlice} from "@reduxjs/toolkit"
import axios from 'axios'



const initialState = {
    price :0,
    orderStatus:'in Queue',
    total_items:0,
    data :[{
        menu:{},
        qty:0,
        sing_price:0
    }]
}


const cartSlice  = createSlice({
    name :'cart',
    initialState,
    reducers :{
        addToCart : (state,action)=>{
           console.log("infinite")
            const obj = state.data.find(({menu})=> menu.menu_id === action.payload.menu_id);
           
            if(obj)
            {
                state.data.find(({menu})=> menu.menu_id === action.payload.menu_id).qty++;
                state.data.find(({menu})=> menu.menu_id === action.payload.menu_id).sing_price=  parseInt(state.data.find(({menu})=> menu.menu_id === action.payload.menu_id).sing_price)+parseInt(action.payload.menu_prise)
                // if(state.data.find(({menu})=> menu.menu_id === action.payload.menu_id).qty > parseInt(action.payload.Available))
                // {
                //     return 0;
                // }
               
                console.log(parseInt(action.payload.Available))
            }
            else
            {
                state.data.push({...state.data , menu:action.payload,qty:1,sing_price:action.payload.menu_prise})
            }
            state.price = state.price + parseInt(action.payload.menu_prise);
            state.total_items++;
            return;

        },
        remToCart : (state,action)=>{

        
            const obj = state.data.find(({menu})=> menu.menu_id === action.payload.menu_id);
           
            if(obj)
            
            {   
                 state.data.find(({menu})=> menu.menu_id === action.payload.menu_id).qty--;
                 state.data.find(({menu})=> menu.menu_id === action.payload.menu_id).sing_price=state.data.find(({menu})=> menu.menu_id === action.payload.menu_id).sing_price-parseInt(action.payload.menu_prise)

                if(state.data.find(({menu})=> menu.menu_id === action.payload.menu_id).qty<1)
                {
                   state.data =  state.data.filter((data) => data.menu.menu_id != action.payload.menu_id);
                }

            }
           
            if(state.price==0)
            {
                return;
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

            state.data=  state.data.filter((data) => data.menu.menu_id != action.payload.menu_id);
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
        if(data1.total_items===0)
        {
            console.log("order is not places")
            
        }
        const response = await axios.post('/user/order' , {user_id,data1});
        
        if(response)
        {
            console.log('response from backend ',response);
            return 0;
        }
    } catch (err) {
      throw new Error(err);
      
    }
    
  };
  


export default cartSlice.reducer  
export const {addToCart,remToCart,remComp} = cartSlice.actions




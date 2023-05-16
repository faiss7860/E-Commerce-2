const { createSlice, combineReducers } = require("@reduxjs/toolkit")

const CartSlice = createSlice({
    name:'cart',
    quantity:0,
    initialState:[],
    reducers:{
        add:(state , action)=>{
            // console.log(state)
            const find = state.findIndex(item => item.id === action.payload.id)
            if(find>=0){
                state[find].quantity += 1
            }else{
                // console.log(action.payload);
                const temp = {...action.payload , quantity : 1}
                state.push(temp)
            }
        },
        remove:(state,action)=>{
            // console.log(action)
            return state.filter((item)=>item.id !== action.payload.id)
        },
        quantityRemove:(state , action)=>{
            const find = state.findIndex(item => item.id === action.payload.id)
            if(state[find].quantity > 1){ 
                state[find].quantity -= 1
            }
            else if(state[find.quantity === 1]){
                return state.filter((item)=>item.id !== action.payload)
            }
        },
        quantityAdd:(state , action)=>{
            const find = state.findIndex(item => item.id === action.payload.id)
            if(state[find].quantity + 1){ 
                    state[find].quantity += 1
            }
        },
    }
})

export const {add , remove , quantityRemove , quantityAdd } = CartSlice.actions;

export const data = combineReducers({
    CartSlice: CartSlice.reducer,
});
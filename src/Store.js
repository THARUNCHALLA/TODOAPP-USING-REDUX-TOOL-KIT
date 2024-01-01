import {configureStore, createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        AddTodo:(state,action)=>{
                return [...state,action.payload]
        },
        Delete:(state,action)=>{
            return action.payload
        }
    }
})


const Store = configureStore({
    reducer:{
        user:userSlice.reducer
    }
})

export const {AddTodo,Delete} = userSlice.actions

export default Store

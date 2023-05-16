import { configureStore } from "@reduxjs/toolkit";
import { data } from "../Reducer/CartSlice";

const Store = configureStore({
  reducer:{
    cart:data,
  }
})

export default Store;
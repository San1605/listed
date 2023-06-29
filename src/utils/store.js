import {configureStore} from "@reduxjs/toolkit"
import sideBarSlice from "./sideBarSlice";

const store=configureStore({
reducer:{
    side:sideBarSlice
}
})

export default store;

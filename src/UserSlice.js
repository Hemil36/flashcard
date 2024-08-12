import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    userId: null,
    acesstoken: null,
}



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.userId = action.payload.user_id;
            state.acesstoken = action.payload.accesstoken
        },
        clearUser(state) {
            state.userId = null
        }
       
        
    }
   
})
// const axio = AxiosPrivate()

export const getUser = state => state.user.userId
export const { setUser, clearUser } = userSlice.actions



export default userSlice.reducer;





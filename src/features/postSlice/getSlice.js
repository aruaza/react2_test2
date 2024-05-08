import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    post:[],

}

export const asyncGetPosts = createAsyncThunk(
    'asyncGetPosts',
    async function(count, {dispatch, rejectWithValue}){
        const response = await fetch(`https://dummyjson.com/posts/${count}`)
        const repsonseData = await response.json()
        dispatch(addPosts(repsonseData))
    }
)

const postaDataSlice = createSlice({
    name:'postaDataSlice',
    initialState,
    reducers:{
        addPosts:(state, action) => {
            state.post = action.payload
        },
    }
})

export const {addPosts} = postaDataSlice.actions
export default postaDataSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


const youtubeSlice = createSlice({
    name: "youtubeConfig",
    initialState: {
        lang: "en",
        videoCatgory:0
    },
    reducers: {
        setLanguage: (state, action) => {
            state.lang = action.payload
        },
        setVideoCatgory:(state, action) => {state.videoCatgory= action.payload}
        
    }
})


export const {setLanguage, setVideoCatgory} = youtubeSlice.actions
    
export default youtubeSlice.reducer;

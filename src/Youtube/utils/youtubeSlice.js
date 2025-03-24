import { createSlice } from "@reduxjs/toolkit";


const youtubeSlice = createSlice({
    name: "youtubeConfig",
    initialState: {
        lang: "en",
        videoCatgory: 0,
        searchQuery:""
    },
    reducers: {
        setLanguage: (state, action) => {
            state.lang = action.payload
        },
        setVideoCatgory: (state, action) => { state.videoCatgory = action.payload },
        setSearchQuery: (state, action) => { state.searchQuery = action.payload }
        
    }
})


export const { setLanguage, setVideoCatgory, setSearchQuery } = youtubeSlice.actions
    
export default youtubeSlice.reducer;

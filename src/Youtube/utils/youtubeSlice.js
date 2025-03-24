import { createSlice } from "@reduxjs/toolkit";


const youtubeSlice = createSlice({
    name: "youtubeConfig",
    initialState: {
        lang: "en",
        videoCatgory: 0,
        searchQuery: "",
        hideMenu: true,
        searchCache: {}
    },
    reducers: {
        setLanguage: (state, action) => {
            state.lang = action.payload
        },
        setVideoCatgory: (state, action) => { state.videoCatgory = action.payload },
        setSearchQuery: (state, action) => { state.searchQuery = action.payload },
        hideMenu: (state) => {
            state.hideMenu= !state.hideMenu
        },
        setSearchCache: (state, action) => {
            console.log(`first`, action.payload)
            state.searchCache = { ...state.searchCache, ...action.payload }
        
        }
    }
})


export const { setLanguage, setVideoCatgory, setSearchQuery, hideMenu, setSearchCache } = youtubeSlice.actions
    
export default youtubeSlice.reducer;

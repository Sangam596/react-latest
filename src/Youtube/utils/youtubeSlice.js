import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_OFFSET } from "./constants";


const youtubeSlice = createSlice({
    name: "youtubeConfig",
    initialState: {
        lang: "en",
        videoCatgory: 0,
        searchQuery: "",
        hideMenu: true,
        searchCache: {},
        chatMessage:[]
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
            state.searchCache = { ...state.searchCache, ...action.payload }
        
        },
        setChatMessage: (state, action) => {
            state.chatMessage.splice(LIVE_CHAT_OFFSET, 1, action.payload);
            
        }
    }
})


export const { setLanguage, setVideoCatgory, setSearchQuery, hideMenu, setSearchCache, setChatMessage } = youtubeSlice.actions
    
export default youtubeSlice.reducer;

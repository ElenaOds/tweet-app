import { createSlice } from '@reduxjs/toolkit';
import { getTweets, updateTweets } from './usersOperations';


const usersSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getTweets.pending](state) {
        state.isLoading = true;
        },
        [getTweets.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
        },
        [getTweets.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
        },
        [updateTweets.pending](state) {
        state.isLoading = true;
        },
        [updateTweets.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;   
        const index = state.data.findIndex(
          data => data.id === action.payload.id);
          state.data.splice(index, 1, action.payload);
        },
        [updateTweets.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
        },
    },
    
});

export default usersSlice;
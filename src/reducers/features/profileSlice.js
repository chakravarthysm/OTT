import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profileStore",
    initialState: {},
    reducers: {
        createUser: (state, action) => { state.User = action.payload },
    }
})

const { createUser } = profileSlice.actions;

export default profileSlice.reducer;
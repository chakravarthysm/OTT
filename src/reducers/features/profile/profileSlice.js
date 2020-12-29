import { createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api"

const profileSlice = createSlice({
    name: "profileStore",
    initialState: {
        SignupSuccessful: false
    },
    reducers: {
        signUpUser: (state, action) => { state.SignupSuccessful = action.payload }
    }
})

const { signUpUser } = profileSlice.actions;

export const signUp = (formData) => async dispatch => {
    try {
        await api.post("/auth/signup", formData)
        dispatch(signUpUser(true))
    } catch(e) {
        console.error(e)
    }
}

export default profileSlice.reducer;
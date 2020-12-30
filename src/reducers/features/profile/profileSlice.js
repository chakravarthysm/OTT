import { createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api"

const profileSlice = createSlice({
    name: "profileStore",
    initialState: {
        SignupSuccessful: false
    },
    reducers: {
        signUpUser: (state, action) => { state.SignupSuccessful = action.payload },
        loginUser: (state, action) => { state.User = action.payload },
        logoutUser: (state, action) => { state.User = action.payload }
    }
})

export const { signUpUser, loginUser, logoutUser } = profileSlice.actions;

export const signUp = (formData) => async dispatch => {
    try {
        await api.post("/auth/signup", formData)
        dispatch(signUpUser(true))
    } catch (e) {
        console.error(e)
    }
}


export const login = (formData) => async dispatch => {
    try {
        let response = await api.post("/auth/login", formData)
        dispatch(loginUser(response))
        localStorage.setItem("user", JSON.stringify(response))
    } catch (e) {
        console.error(e)
    }
}

export default profileSlice.reducer;
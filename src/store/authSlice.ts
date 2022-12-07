import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    data: UserDataInterface,
    isAuth: boolean,
    initialized: boolean
}
export interface UserDataInterface { 
        email: string | null,
        login: string | null,
}

const initialState: AuthState = {
    data: {
        email: null,
        login: null,
    },
    isAuth: false,
    initialized: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUserData: (state, action: PayloadAction<UserDataInterface> ) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.data = action.payload
        },
        setToggleLogIn: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },
        setInitialized: (state, action: PayloadAction<boolean>) => {
            state.initialized = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setAuthUserData, setToggleLogIn, setInitialized } = authSlice.actions

export default  authSlice.reducer
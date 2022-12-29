// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

import { CategoryType } from "../../types/formTypes"


export const navItems = [
    {
        id:0,
        name: 'index',
        value: 'Главная',

    },
    {
        id: 1,
        name: 'news',
        value: 'Новости',

    },
    {
        id: 2,
        name: 'catalogue',
        value: 'Размещение и тарифы',

    },
    {
        id: 3,
        name: 'map',
        value: 'Объявления на карте',
    },
    {
        id: 4,
        name: 'contacts',
        value: 'Контакты',
    },
]

export const categoriesItems = [
    {
        id: 0,
        name: 'room' as CategoryType,
        value: 'Квартиры на сутки',

    },
    {
        id: 1,
        name: 'cottage' as CategoryType,
        value: 'Коттеджи и усадьбы',

    },
    {
        id: 2,
        name: 'sauna' as CategoryType,
        value: 'Бани и сауны',

    },
    {
        id: 3,
        name: 'auto' as CategoryType,
        value: 'Авто на прокат',
    },
]

// export interface AuthState {
//     data: UserDataInterface,
//     isAuth: boolean,
//     initialized: boolean
// }
// export interface UserDataInterface { 
//         email: string | null,
//         login: string | null,
// }

// const initialState: AuthState = {
//     data: {
//         email: null,
//         login: null,
//     },
//     isAuth: false,
//     initialized: false,
// }

// export const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         setAuthUserData: (state, action: PayloadAction<UserDataInterface> ) => {
//             // Redux Toolkit allows us to write "mutating" logic in reducers. It
//             // doesn't actually mutate the state because it uses the Immer library,
//             // which detects changes to a "draft state" and produces a brand new
//             // immutable state based off those changes
//             state.data = action.payload
//         },
//         setToggleLogIn: (state, action: PayloadAction<boolean>) => {
//             state.isAuth = action.payload
//         },
//         setInitialized: (state, action: PayloadAction<boolean>) => {
//             state.initialized = action.payload
//         },
//     },
// })

// // Action creators are generated for each case reducer function
// export const { setAuthUserData, setToggleLogIn, setInitialized } = authSlice.actions

// export default  authSlice.reducer
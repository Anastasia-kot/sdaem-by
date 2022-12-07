import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import catalogueReducer from './catalogueSlice'
import newsReducer from './newsSlice'
 


export const store = configureStore({
    reducer: {
        auth: authReducer,
        news: newsReducer, 
        catalogue: catalogueReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
import { legacy_createStore as createStore} from 'redux'
import { createSlice, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        signInWithGoogle(state, action ) {
           state.user = action.payload
        },
        signUserOut(state) {
            state.user = null
        },
        signIn(state, action) {
            state.user = action.payload
        }
    }
}); 


const store = configureStore({
    reducer: userSlice.reducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


export const userActions = userSlice.actions;
export default store;
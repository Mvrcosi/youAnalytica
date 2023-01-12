import { legacy_createStore as createStore} from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInWithGoogle(state, action ) {
            console.log(action.payload)
        },
        signOut(state, action) {
            console.log('sign out')
        }
    }
}); 


const store = configureStore({
    reducer: userSlice.reducer
});


export const userActions = userSlice.actions;
export default store;
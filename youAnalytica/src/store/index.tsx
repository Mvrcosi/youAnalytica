import { legacy_createStore as createStore} from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {user: {}};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInWithGoogle(state, action ) {
           return {...initialState, user: action.payload }
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
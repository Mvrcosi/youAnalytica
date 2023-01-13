import { legacy_createStore as createStore} from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        signInWithGoogle(state, action ) {
           state.user = action.payload
        },
        signOut(state, action) {
            state.user = null
        }
    }
}); 


const store = configureStore({
    reducer: userSlice.reducer
});


export const userActions = userSlice.actions;
export default store;
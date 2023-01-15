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
        signUserOut(state) {
            state.user = null
        },
        signIn(state, action) {
            state.user = action.payload
        }
    }
}); 


export const {signInWithGoogle, signUserOut, signIn} = userSlice.actions;
export default userSlice.reducer;
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


export const {signInWithGoogle, signOut} = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
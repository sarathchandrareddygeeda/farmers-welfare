import { createSlice } from '@reduxjs/toolkit';



const userSlice = createSlice({
    name : "userSlice",
    initialState : null,
    reducers : {
        settingUser: (state,action) => {
            const newUser = {
                firstName : action.payload.firstname,
                lastName : action.payload.lastname,
                email : action.payload.email,
                password  : action.payload.password
            }
            return state = newUser
        },
        revertUser :(state,action) => {
            return state=null;
        }
    }

})


export default userSlice.reducer;
export const {settingUser,revertUser} = userSlice.actions;
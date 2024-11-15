import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { updateUserById, fetchUserById } from './UserApi'

const state = {
    status: 'idle',
    userInfo: null,
    errors: null,
    successMessage: null,
}

export const fetchUserByIdAsync = createAsyncThunk('users/fetchUserByIdAsync', async (id) =>
{
    const userInfo = await fetchUserById(id);
    return userInfo
})

export const updateUserByIdAsync = createAsyncThunk('users/updateUserByIdAsync', async (id) =>
{
    const userInfo = await updateUserById(id);
    return userInfo
})

const userSlice = createSlice({
    name: 'UserSlice',
    initialState: state,
    reducers: {},
    extraReducers: (builder) =>
    {
        builder
            .addCase(fetchUserByIdAsync.pending, (state) =>
            {
                state.status = 'pending'
            })
            .addCase(fetchUserByIdAsync.fulfilled, (state, action) =>
            {
                state.status = 'fulfilled'
                state.userInfo = action.payload
            })
            .addCase(fetchUserByIdAsync.rejected, (state, action) =>
            {
                state.status = 'rejected'
                state.errors = action.error
            })
            .addCase(updateUserByIdAsync.pending, (state) =>
            {
                state.status = 'pending'
            })
            .addCase(updateUserByIdAsync.fulfilled, (state, action) =>
            {
                state.status = 'fulfilled'
                state.userInfo = action.payload
            })
            .addCase(updateUserByIdAsync.rejected, (state, action) =>
            {
                state.status = 'rejected'
                state.errors = action.error
            })
    }

})

export const selectUserStatus = (state) => state.UserSlice.status
export const selectUserInfo = (state) => state.UserSlice.userInfo
export const selectUserErrors = (state) => state.UserSlice.errors
export const selectUserSuccessMessage = (state) => state.UserSlice.successMessage

export default userSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users"

export const fetchUsers = createAsyncThunk(
    'bioSlice/fetchUsers',
    async () => {
        try {
            const response = await axios.get(URL)
            return response.data
        } catch (error) {
            return error.message            
        }
    }
)

export const bioSlice = createSlice({
    name: 'bioSlice',
    initialState: {
        users:[],
        status:'',
        error:''
    },
    reducers: {
        input: (state, action) => {
            console.log(action)
            state[action.payload.key] = action.payload.data
        },
        submit: (state) => {
            alert(JSON.stringify(state))
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state, action) => {
            console.log('pending', state, action)
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            console.log('fulfilled', state, action)
            state.users = action.payload
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            console.log('rejected')
        })
    }
})

export const { input, submit } = bioSlice.actions

export default bioSlice.reducer
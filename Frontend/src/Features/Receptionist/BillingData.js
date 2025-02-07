import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bills: [],
}

const BillingSlice = createSlice({
    name: 'Bills',
    initialState,
    reducers: {
        setBills: (state, action) => {
            state.bills = action.payload
        },

        clearBills: (state) => {
            state.value = []
        }
    }

})

export const {setBills, clearBills} = BillingSlice.actions

export default BillingSlice.reducer
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

        removeBill : (state, action)=>{
            state.bills = state.bills.filter(bill=>bill.id === action.payload).pop()
        },

        clearBills: (state) => {
            state.value = []
        }
    }

})

export const {setBills, clearBills, removeBill} = BillingSlice.actions

export default BillingSlice.reducer
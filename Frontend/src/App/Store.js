import { configureStore } from "@reduxjs/toolkit"
import PetReducer from '../Features/Pet/PetSlice'
import BillReducer from '../Features/Receptionist/BillingData'
// import GeneralReducer from '../Features/General/GeneralSlice'

export const store = configureStore({
    reducer: {
        petStore: PetReducer,
        billDetails : BillReducer, 
        // idStore : GeneralReducer
    },
})
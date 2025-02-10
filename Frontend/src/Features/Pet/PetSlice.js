import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

const PetSlice = createSlice({
    name: 'PetStore',
    initialState,
    reducers: {
        setPetList: (state, action) => {
            state.value.push(action.payload)
        },
        clearPetList: (state) => {
            state.value = [];
        }
    }
})

export const { setPetList, clearPetList } = PetSlice.actions

export default PetSlice.reducer
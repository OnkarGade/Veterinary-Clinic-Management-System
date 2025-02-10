import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: null,
}

const GeneralSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setId: (state, action) => {
            state = action.payload
        },

    }

})

export const { setId } = GeneralSlice.actions
export default GeneralSlice.reducer
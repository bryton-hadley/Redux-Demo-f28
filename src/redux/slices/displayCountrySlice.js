import {createSlice} from "@reduxjs/toolkit";
import initailCountry from "../../assets/initialCountry"

export const displayCountrySlice = createSlice({
    name: 'displayCountry',
    initialState: {
        value: initailCountry,
    },
    reducers: {
        setDisplayCountry: (state, action) => {
            state.value = action.payload;
        },
        deleteDisplayCountry: (state) => {
            state.value = null;
        }
    }
})

export const {setDisplayCountry, deleteDisplayCountry} = displayCountrySlice.actions;

export const selectDisplay = (state) => state.displayCountry.value;

export default displayCountrySlice.reducer;
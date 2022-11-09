// importing
import { createSlice } from "@reduxjs/toolkit";

export const potentialCountriesSlice = createSlice({
     name: "potentialCountries",
     initialState: {
        value: [
            {
                name: {
                    common: "America",
                },
            },
        ],
     },
     reducers: {
        setPotentialCountries: (state, action) => {
            state.value = action.payload;
        },
        deletePotentialCountries: (state) => {
            state.value = null;
        },
     },

});  

// exporting the destructured variables from potentailCountriesSlice
export const {setPotentialCountries, deletePotentialCountries} = potentialCountriesSlice.actions;

// This function defines how to read the state of potentialCountries. You will use this function elsewhere in your react app to read from state
export const selectPotentials = (state) => state.potentialCountries.value;

// exporting the default now
export default potentialCountriesSlice.reducer;

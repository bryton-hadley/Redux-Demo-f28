import {configureStore} from "@reduxjs/toolkit";
import potentialCountriesReducer from '../redux/slices/potentialCountriesSlice';
import displayedCountryReducer from "./slices/displayCountrySlice";

//  Exporting default configure store invoked and passing in an object as the parameter and adding a reducer
export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer,
        displayCountry: displayedCountryReducer
    },
});
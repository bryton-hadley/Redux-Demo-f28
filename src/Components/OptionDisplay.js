import React from "react";
import { useSelector } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";

const OptionDisplay = () => {
    let currentPotentials = useSelector(selectPotentials)
    console.log(currentPotentials)
    return <div className="stack">
        {currentPotentials.map((element, idenx) => {
            return (
                <h2 key={element.name.offical} className="country-option">
                    {element.name.common}
                </h2>
            )
        })}
    </div>;
};

export default OptionDisplay;

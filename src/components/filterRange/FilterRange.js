import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const FilterRange = ({ inputRange, setInputRange, filterByRange }) => {
  return (
    <div style={{width: "40%"}}>
      <InputRange
        maxValue={10}
        minValue={0}
        value={inputRange}
        onChange={(range) => {
          setInputRange(range);
          filterByRange(range);
        }}
      />
    </div>
  );
};

export default FilterRange;

import React, { useState } from "react";
import "./Filter.css";

export default function Filter({ type, fields, functionProp }: any) {
  const [selectedOption, setSelectedOption] = useState("all");

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.id);
  };

  return (
    
      <fieldset className="fieldset">
        <legend>{type}</legend>
        {fields.map((field: string, index: number) => (
          <div key={index} className="filter-item-container">
            <span
              id={field}
              onClick={(e) => {
                handleOptionChange(e);
                functionProp(`${field}`);
              }}
              className={selectedOption === `${field}` ? "active-filter" : ""}
            >
              {field}
            </span>
          </div>
        ))}
      </fieldset>
   
  );
}

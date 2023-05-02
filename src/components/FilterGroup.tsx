import React, { useEffect, useState } from "react";
import { dataItem } from "../interfaces";
import Filter from "./Filter";
import "./FilterGroup.css";

export default function FilterGroup({ setFilteredData, filteredData, originalArray }: any) {
  const [typeFilter, setTypeFilter] = useState("all");
  const [sizeFilter, setSizeFilter] = useState("all");
  const [baseFilter, setBaseFilter] = useState("all");
  const [frameFilter, setFrameFilter] = useState("all");
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    typeFiltering(originalArray);
    console.log("useeffect");
  }, [typeFilter, sizeFilter, baseFilter, frameFilter]);

  function typeFiltering(Data: dataItem[]) {
    let newArray = Data;
    if (typeFilter != "all") {
      console.log("in fliter type");
      newArray = Data.filter((item) => item.type === typeFilter);
    }
    if (sizeFilter != "all") {
      console.log("in fliter size");
      newArray = newArray.filter((item) => item.size === sizeFilter);
    }
    if (baseFilter != "all") {
      console.log("in fliter size");
      newArray = newArray.filter((item) => item.base === baseFilter);
    }
    if (frameFilter != "all") {
      console.log("in fliter size");
      newArray = newArray.filter((item) => item.frame === frameFilter);
    }
    setFilteredData(newArray);
  }

  function handleTypeChange(value: string) {
    setTypeFilter(value);
  }

  function handleSizeChange(value: string) {
    setSizeFilter(value);
  }

  function handleBaseChange(value: string) {
    setBaseFilter(value);
  }

  function handleFrameChange(value: string) {
    setFrameFilter(value);
  }

  function toggleShowFilter() {
    if (showFilter) {
      setShowFilter(false);
    } else {
      setShowFilter(true);
    }
  }

  return (
    <>    
      <button className="mobile-filter-button" onClick={() => toggleShowFilter()}>
          Filter ▼
        </button>
      <div className={`filter-group mobile-filter-group-wrapper growDown ${showFilter ? "hide-mobile-filter-group-wrapper" : ""}`}>
        <Filter type="Type" fields={["all", "oil", "water"]} functionProp={handleTypeChange} />
        <Filter type="Size" fields={["all", "small", "medium", "large"]} functionProp={handleSizeChange} />
        <Filter type="Base" fields={["all", "canvas", "board", "paper"]} functionProp={handleBaseChange} />
        <Filter type="Frame" fields={["all", "frameless", "in frame"]} functionProp={handleFrameChange} />
      </div>
    </>
  );
}

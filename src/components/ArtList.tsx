import React, { useState } from "react";
import "./ArtList.css";
import { dataItem } from "../interfaces";
import FilterGroup from "./FilterGroup";
import Painting from "./Painting";

export default function ArtList({
  filteredData,
  setFilteredData,
  originalArray,
}: {
  filteredData: dataItem[] | undefined;
  setFilteredData: any;
  originalArray: dataItem[] | undefined;
}) {
  return (
    <>
      {filteredData ? (
        <div className="art-list">
          <FilterGroup setFilteredData={setFilteredData} filteredData={filteredData} originalArray={originalArray} />
          {filteredData && filteredData.map((item, index) => <Painting key={index} item={item} />)}
        </div>
      ) : (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      )}
    </>
  );
}

import React, { useState } from "react";
import { dataItem } from "../interfaces";
import './Painting.css';

export default function Painting({ item }: { item: dataItem }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      {zoomed && (
        <div className="zoomed-wrapper" onClick={() => setZoomed(false)}>
          <img className="art-card-image zoomed-image roll-out" src={item.image} alt="A painting made by Nikolett Bohus" />
        </div>
      )}
      <div className="art-card roll-out">
        <div className="art-card-image-container" onClick={() => setZoomed(true)} style={{ width: item.width * 10, height: item.height * 10 }}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img className="art-card-image image-shadow" src={item.small} alt="A painting made by Nikolett Bohus" />
          <div className="art-card-text-container">
            <h3 className="art-card-text-title">{item.name}</h3>
            <p className="art-card-text-date">{item.date}</p>
          </div>
        </div>
      </div>
    </>
  );
}

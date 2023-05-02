import React, { useEffect, useRef, useState } from "react";
import { dataItem } from "../interfaces";
import "./Hero.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import background from "../../static/bgv2.jpg";
import { Script, withPrefix } from "gatsby";


/* function TestPic({ randomImage }: any) {
  return <img className="hero-img image-shadow roll-out animatex" src={randomImage} />;
} */

export default function Hero({ originalArray, index, setIndex }: { originalArray: dataItem[] | undefined; index: any; setIndex: any }) {

  
  
  console.log(background)
 
  /* const [randomItem, setRandomItem] = useState({ name: "", image: "", date: "" });
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);
  

  useEffect(() => {
    if (originalArray) {
      ///indexChangeing(originalArray.length);
      console.log("is this run?");
    }
    setInterval(() => indexChangeing(4), 15000);
  }, []);

  function indexChangeing(arrayLength: number) {
    console.log("first index", index);

    console.log("arrayLength", arrayLength);
    let newIndex;
   
      if (index < arrayLength) {
        console.log("....in if upper.......", index, newIndex);
       
        newIndex = index + 1;

        console.log("....in if upper next.......", index, newIndex);
        setIndex((index + 1));
      }
      if (index >= arrayLength) {
        setIndex(0);
      }
   

    console.log("last index", index);
  }

  useEffect(() => {
    if (originalArray) {
      testingIndexChange(originalArray);
    }
  }, [index]);

  function testingIndexChange(originalArray: dataItem[]) {
    setRandomItem({ name: `${originalArray[index].name}`, image: `${originalArray[index].image}`, date: `${originalArray[index].date}` });
  }

  function getRandomArt(originalArray: dataItem[]) {
    let randomItem = originalArray[getRandomInt(originalArray.length - 1)];
    setRandomItem({ name: `${randomItem.name}`, image: `${randomItem.image}`, date: `${randomItem.date}` });
    console.log(randomItem);
    const imgTag = document.createElement("img");
  }

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  } */

  return (
    <div className="hero-wrapper">
      <img className="hero-img" src={background} alt="Abstract background image" />
    </div>
  );
}

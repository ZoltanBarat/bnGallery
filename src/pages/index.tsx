import { HeadFC, PageProps, Script } from "gatsby";
import React, { useState, useEffect } from "react";
import ArtList from "../components/ArtList";
import Hero from "../components/Hero";
import "./index.css";

import { dataItem } from "../interfaces";
import { getDatabase, ref, child, get } from "firebase/database";
import { database } from "../firebase";
import PageLayout from "../components/PageLayout";

const IndexPage: React.FC<PageProps> = () => {
  const [index, setIndex] = useState(0);
  const [filteredData, setFilteredData] = useState<dataItem[]>();
  const [originalArray, setOriginalArray] = useState<dataItem[]>();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const dbRef = ref(database);
    get(child(dbRef, `paints/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          //console.log(snapshot.val());
          setOriginalArray(snapshot.val());
          setFilteredData(snapshot.val());
         
        } else {

          alert("No data available");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <PageLayout>
      <section className="hero">
        <Hero originalArray={originalArray} index={index} setIndex={setIndex} />
      </section>
      <main className="main">
        <ArtList setFilteredData={setFilteredData} filteredData={filteredData} originalArray={originalArray} />
      </main>
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

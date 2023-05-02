import * as React from "react";
import PageLayout from "../components/PageLayout";
import "./about.css";

const AboutPage = () => {

  return (
    <PageLayout>
      <main className="about-wrapper">
        <div className="about-text">
          <h1>About Me</h1>
          <p>Hi there! My name is Nikolett Bohus. I love painting 🎨. </p>
        </div>
      </main>
    </PageLayout>
  );
};

export const Head = () => <title>About page</title>

export default AboutPage;

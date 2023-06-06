import * as React from "react";
import PageLayout from "../components/PageLayout";
import "./about.css";

const AboutPage = () => {

  return (
    <PageLayout>
      <main className="about-wrapper">
        <div className="about-text">
          <h1>About Me</h1>
          <p>Hi, I'm Nikolett from Hungary! Before I started to painting it seemed to be a danuting task but I wanted to try something new which helps me relax. Since I had no backgroung in this field, my first creation was only a basic aquarell paiting about flowers. Later based on the instructional videos of many painters about the techniques, that they use while aquarell painting, taught me a lot. For years I tried to deepen my aquarell techniques and then I decided it was time to try something else. Although I still love aquarell painting, a few years ago I also started to learn oil painting techniques. At the moment, I prefer the abstract trend, but the creation of landscapes is also close to my heart. I love how every brush stroke doesn't have to be perfect bacause painting is where mistakes can turn into beautiful masterpieces. 🎨</p>
        </div>
      </main>
    </PageLayout>
  );
};

export const Head = () => <title>About page</title>

export default AboutPage;

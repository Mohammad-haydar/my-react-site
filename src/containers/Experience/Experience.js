import React from "react";

import "./Experience.scss";

import Cards from "../../components/Cards/Cards";

const Experience = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="experience-container">
          <h1>Experience</h1>
          {/* <div className="cards-container"> */}
          <Cards />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;

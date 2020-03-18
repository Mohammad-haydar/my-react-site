import React from "react";

import "./Home.scss";

const Home = () => {
  return (
    <section>
      <div className="wrapper">
        <article className="home-container">
          <h1>Hey.</h1>
          <h3>
            I’m Melissa, a software developer from Manchester. Please take a
            look around!
          </h3>
          <p>
            I am excited to build software which has an effect on all those
            around me. The ideas we all have can be brought to real life.
          </p>
          <p>
            I'm a self-taught developer always looking to expand my knowledge.
          </p>
          <p>
            Please check out my work on
            <a
              href="https://github.com/MelissaAstbury "
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                &nbsp;Github&nbsp;<i class="fab fa-github"></i>!
              </span>
            </a>
          </p>
        </article>
      </div>
    </section>
  );
};

export default Home;

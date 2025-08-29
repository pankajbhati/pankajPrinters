// Home.js
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="content-heading-container">
          <h1 id="content-page-heading1">Quality Printing</h1>
          <h2 id="content-page-heading2">On Time, Every Time</h2>
        </div>
        <p className="content-page">
          Providing printing power and capabilities in hands of yours.
          With our help now you can print newspapers, books, magazines
          with as easy as uploading the PDF file. You can leave the rest to us.
        </p>
        <button className="btn-explore">Explore More</button>
      </div>
    </div>
  );
};

export default Home;

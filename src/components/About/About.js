// AboutSection.js
import React from "react";
import "./About.css";

const services = [
  {
    title: "News Papers",
    description: "We provide expertise in printing variety of newspaper.Having a capability to print multiple formats and pages effortlesly. All that is required a PDF and your task is done!",
  },
  {
    title: "Books & Magazines",
    description: "",
  },
  {
    title: "Pamphlets & Many more",
    description: "Offering SEO, social media, and advertising solutions to grow your brand.",
  },
];

const About = () => {
  return (
    <section className="about-section">
      <div className="about-info">
        <h2 className="about-heading">About Us</h2>
        <p className="about-text">
          Pankaj Printers & Packaging was established in 2016. It has since been committed to delivering the best results to its clients. The foundation of the organization was
          laid by <b>Shri Hoshiyar Singh Bhati</b>. He holds an experience of over 20+ years in the printing industry. Having worked with different national organizations in the print
          house media, he has been the go to expert for different printing machines and solutions. All of these have just added to his expertise and knowledge about this industry.
          His vision to provide better and efficient print solutions for everyone. 
        </p>
      </div>

      <div className="services-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

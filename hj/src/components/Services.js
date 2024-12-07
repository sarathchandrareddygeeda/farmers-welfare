import React from 'react';
import '../styles/Services.css';

const services = [
  {
    title: 'Empowering Farmers',
    description:
      'We assist farmers in improving their practices through soil analysis, irrigation guidance, and crop planning to enhance productivity.',
  },
  {
    title: 'Sustainable Technology',
    description:
      'Promoting eco-friendly innovations like agricultural waste recycling and sustainable farming tools for a greener future.',
  },
  {
    title: 'Skill Development Programs',
    description:
      'Offering hands-on training in modern techniques and indigenous skills to boost self-reliance and community growth.',
  },
  {
    title: 'Data-Driven Insights',
    description:
      'Leveraging technology to digitize farming data and provide actionable insights for smarter agricultural decisions.',
  },
  {
    title: 'Market Connections',
    description:
      'Building bridges between farmers and buyers to ensure fair prices and reduce dependency on intermediaries.',
  },
  {
    title: 'Access to Government Schemes',
    description:
      'Simplifying access to subsidies, programs, and financial aids to help farmers secure better livelihoods.',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <header>
        <h1>Our <span className='special-services-head'>Services</span></h1>
      </header>
      <section className="intro-section">
        <p>
          At our organization, we are committed to addressing the challenges faced by farmers and rural communities.
          By combining modern technology with traditional knowledge, we provide comprehensive solutions to improve
          livelihoods and promote sustainability. Explore our wide range of services designed to empower farmers
          and make a lasting impact.
        </p>
      </section>
      <div className="services-grid">
        {services.slice(0, 3).map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <section className="mid-section">
        <h2>Beyond Just Services</h2>
        <p>
          We believe in creating a holistic support system for farmers. Our initiatives go beyond traditional services, focusing 
          on community engagement, education, and long-term solutions. Whether it’s introducing cutting-edge technology or 
          advocating for policy reforms, we are here to make a difference at every level.
        </p>
      </section>
      <div className="services-grid">
        {services.slice(3).map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

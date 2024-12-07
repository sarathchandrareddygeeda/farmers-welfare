import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className='about-page'>
      <header>
        <h1>About Our <span className='special-about-head'>Farmer Welfare App</span></h1>
      </header>
      <section className='about-sec-1'>
        <p>
          Agriculture is the backbone of our economy, and farmers are its lifeblood. However, many farmers face challenges that hinder 
          their productivity and livelihoods. Our <strong>Farmer Welfare App</strong> is designed to empower farmers with the tools and 
          information they need to thrive in an ever-changing agricultural landscape.
        </p>
      </section>
      <section className='about-sec-2'>
        <h2 className='special-about-head'>Personalized Insights</h2>
        <p>Our app provides tailored solutions for farmers to address their unique challenges, including:</p>
        <ul>
          <li><strong>Soil Analysis:</strong> Get recommendations based on soil conditions to maximize crop yield.</li>
          <li><strong>Crop Selection:</strong> Choose the best crops suited for your region and soil type.</li>
          <li><strong>Climatic Conditions:</strong> Receive weather-based insights to plan agricultural activities effectively.</li>
        </ul>
      </section>
      <section className='about-sec-rem'>
        <h2 className='special-about-head'>Smart Data Collection</h2>
        <p>
          Transition from manual record-keeping to a digital format, ensuring accurate, secure, and easily retrievable farming data.
        </p>
      </section>
      <section className='about-sec-rem'>
        <h2 className='special-about-head'>Educational Resources</h2>
        <p>
          Access step-by-step guides, best practices, and updates on sustainable farming techniques, helping farmers stay informed and efficient.
        </p>
      </section>
      <section className='about-sec-rem'>
        <h2 className='special-about-head'>Market Linkages</h2>
        <p>
          Our app connects farmers with markets, enabling them to sell their produce at fair prices and reducing the dependency on middlemen.
        </p>
      </section>
      <section className='about-sec-rem'>
        <h2 className='special-about-head'>Government Schemes</h2>
        <p>
          Stay updated with government programs, subsidies, and financial assistance available for farmers to enhance their income and productivity.
        </p>
      </section>
      <section className='about-sec-rem'>
        <p>
          Our mission is to enhance farmers' productivity, promote sustainable farming, and improve their quality of life. By integrating modern technology 
          with traditional agricultural wisdom, the <strong>Farmer Welfare App</strong> is a step toward building a prosperous and self-sustainable rural community.
        </p>
      </section>
    </div>
  );
};

export default About;

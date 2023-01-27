import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about mg-5'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>That's actually a Demo <b className='text-blue'>React Js</b> project made by Oussama</p>
            <p className='fs-17'>Using React JS good practices and fondamentales</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

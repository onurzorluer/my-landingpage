import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa'
import { Link, animateScroll as scroll } from "react-scroll";
import './AboutPage.css';
import logo from '../../images/onurzorluer.jpeg';
import resume from '../../resume/onurzorluer.pdf';

class AboutPage extends Component {
  
  render() {
    return (
      <section id="about">
        <div className="AboutPage">
          <div className="AboutPage-items">
              <img src={logo} className="AboutPage-photo" alt="ProfilePhoto" />
              <div className="AboutPage-infoText">
              <p>I am skilled in both frontend (<span className="bold">JS and React</span>) and mobile (<span className="bold">React Native</span>) technologies and I am interested in backend (<span className="bold">Node.js, Express and Firebase</span>), but my passion lies in the front end, at the intersection of code and design. <br/>
              Outside of code, I like to create in other ways. From <span className="bold">Turkish folk dances</span> to <span className="bold">music-making</span>, <span className="bold">scuba diving</span>  to <span className="bold">entrepreneurship</span>, I'm always trying new ways of expressing and discovering myself. <br/>
              “Knowing others is intelligence; knowing yourself is true wisdom.” – Lao Tzu </p><br/>
              <span className="AboutPage-downloadText"> Download my CV</span>
                <a target="_blank" rel="noopener noreferrer" href = {resume}>
                  <FontAwesome.FaDownload className="AboutPage-downloadIcon" size='calc(10px + 2vw)' color= '#ffffff' /> 
                </a>
              </div>
            <div>
              <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration= {700}>   
                <FontAwesome.FaArrowCircleDown className="AboutPage-arrowIcon" size='calc(30px + 2vw)'/>
              </Link>
            </div>
          </div>           
        </div>
      </section>
    );
  }
}

export default AboutPage;
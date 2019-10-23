import React, { Component } from 'react';
import Typed from 'react-typed';
import { Link, animateScroll as scroll } from "react-scroll";
import * as FontAwesome from 'react-icons/lib/fa'
import './LandingPage.css';


class LandingPage extends Component {
  
  render() {
    return (
      <section id="home">
        <div className="LandingPage">
          <header className="LandingPage-header">
            <div className="LandingPage-info">       
              <div className="LandingPage-title">
                Hi, I am Onur Zorluer,<br />
                Frontend <span className="highlight blue">Developer</span> <br />
                and
                Security <span className="highlight yellow">Engineer</span> <br />
                based in Izmir, Turkey.
              </div>
            </div>
          </header>
            <div className="LandingPage-infoText">
            <p>Feel free to <span className="underlineLanding">follow me</span> on my social media profiles below and learn more <span className="underline">about me.</span>
                <br /> For collaboration or questions; 
                zorlueronur@gmail.com
              </p>
            </div>
            <div className="LandingPage-tagline">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/onurzorluer">         
                <FontAwesome.FaGithubSquare className="LandingPage-socialIcon" size='calc(30px + 2vw)' />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/onurzorluer">
                <FontAwesome.FaLinkedinSquare className="LandingPage-socialIcon" size='calc(30px + 2vw)' />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/onur_zorluer">
                <FontAwesome.FaTwitterSquare className="LandingPage-socialIcon" size='calc(30px + 2vw)' /> 
              </a>
            </div>
            <div>
                <Typed className="LandingPage-typed"
                strings={[ "“Knowing others is intelligence; knowing yourself is true wisdom.”–Lao Tzu"
                  /* "Welcome!",
                          "Here you can find my projects!",
                          "Here you can find my curriculum vitae!" */
                          ]}
                    typeSpeed={60}
                    backSpeed={50} 
                    loop >
                </Typed>
            </div>
        </div>
      </section>
    );
  }
}

export default LandingPage;
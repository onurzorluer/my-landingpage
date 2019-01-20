import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import * as FontAwesome from 'react-icons/lib/fa'
import './Footer.css';

class Footer extends Component {
  
  render() {
    return (
      <section id="footer">
        <div className="Footer">
          <div className="Footer-items">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {700}>         
              <FontAwesome.FaArrowCircleUp className="Footer-arrowIcon"/>
          </Link> 
          <div className="Footer-infoText">
            © Copyright {new Date().getFullYear()} Onur Zorluer
          </div>
          </div>        
        </div>
      </section>
    );
  }
}

export default Footer;
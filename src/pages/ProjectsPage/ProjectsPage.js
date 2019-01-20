import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from './PortfolioItem';
import Projects from '../../datas/Projects';
import './ProjectsPage.css';
class ProjectsPage extends Component {
  render() {
    return (
      <section id="portfolio">
      <div className="ProjectsPage">
        <div className="ProjectsPage-grid">
          <div className="ProjectsPage-projectTitle">Projects</div>
          <p>A Selection Of Projects That I'm Not Too Ashamed Of</p>
          <div className="portfolio-wrapper">
          {Projects.map((item, i) => (
              <PortfolioItem 
                header={item.header}
                description={item.description}
                githubLink={item.githubLink}
                externalLink={item.externalLink}
                playStoreLink={item.playStoreLink}
                appStoreLink={item.appStoreLink}
                key={i}
                />
            ))} 
          </div>
        </div>
      </div>
      </section>
    );
  };
}


export default ProjectsPage;
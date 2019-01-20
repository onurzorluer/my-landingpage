import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as FontAwesome from 'react-icons/lib/fa'
import './PortfolioItem.css';

class PortfolioItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div
        className="portfolio-item"
      >
        <div className="portfolio-item__title"> <p className="underline">{this.props.header}</p></div>
        <div className="portfolio-item__desc">
          <p>{this.props.description}</p>
        </div>
        <div className="portfolio-item__links">
        {this.props.githubLink !== '' ?
          <a target="_blank" rel="noopener noreferrer" href={this.props.githubLink}>
          <FontAwesome.FaGithub className="portfolio-item__icon" />
          </a>
          :
          null
        }
        {this.props.externalLink !== '' ?
          <a target="_blank" rel="noopener noreferrer" href={this.props.externalLink}>
          <FontAwesome.FaExternalLinkSquare className="portfolio-item__icon" />
          </a>
          :
          null
        }
        {this.props.playStoreLink !== '' ?
          <a target="_blank" rel="noopener noreferrer" href={this.props.playStoreLink}>
          <FontAwesome.FaAndroid className="portfolio-item__icon" />
          </a>
          :
          null
        }
        {this.props.appStoreLink !== '' ?
          <a target="_blank" rel="noopener noreferrer" href={this.props.appStoreLink}>
          <FontAwesome.FaApple className="portfolio-item__icon" />
          </a>
          :
          null
        }
        </div>
      </div>
    );
  };
};

PortfolioItem.propTypes = {
  header: propTypes.string,
  description: propTypes.string,
  githubLink: propTypes.string,
  externalLink: propTypes.string,
  playStoreLink: propTypes.string,
  appStoreLink: propTypes.string,
}

PortfolioItem.defaultProps = {
  header: 'Project',
  description: '',
  githubLink: '',
  externalLink: '',
  playStoreLink: '',
  appStoreLink: ''
}

export default PortfolioItem;
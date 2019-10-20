import React, { Component } from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import Footer from './pages/Footer/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
          <LandingPage />
      </div>
    );
  }
}

export default App;

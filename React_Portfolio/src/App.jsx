import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';  // Route added here
import Navigation from './components/Navigation';
import './App.css';

function App() {
    return (
        <Router>
            <div className="container">
                <header className="app-header">
                    <h1>Darnell's Portfolio</h1>
                    <Navigation />
                </header>

                <main className="app-main">
                    <Switch>
                        <Route exact path="/">
                            <AboutMe />
                        </Route>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/resume">
                            <Resume />
                        </Route>
                    </Switch>
                </main>

                <footer className="app-footer">
                    <p>Find me on GitHub and LinkedIn.</p>
                </footer>
            </div>
        </Router>
    );
}

function AboutMe() {
    return (
        <section id="aboutme">
            <h2>About Me</h2>
            <p>This is the about me section.</p>
        </section>
    );
}

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <p>This is the projects section.</p>
        </section>
    );
}

function Contact() {
  return (
      <section id="contact">
          <h2>Contact</h2>
          <p>
              This is the contact section. You can reach me at:
              <ul>
                  <li><a href="https://github.com/Dadams11" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/yourLinkedInUsername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
          </p>
      </section>
  );
}


function Resume() {
    return (
        <section id="resume">
            <h2>Resume</h2>
            <p>This is the resume section.</p>
        </section>
    );
}

export default App;

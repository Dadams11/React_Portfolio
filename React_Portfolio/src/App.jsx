import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>My Portfolio</h1>
          <Navigation />
        </header>

        <main>
          <Switch>
            <Route exact path="/">
              <AboutMe />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </main>

        <footer>
          <p>Find me on GitHub, LinkedIn, and Twitter.</p>
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

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <p>This is the portfolio section.</p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>This is the contact section.</p>
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

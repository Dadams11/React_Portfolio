import { useState } from 'react';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState("About Me");

  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            {['About Me', 'Portfolio', 'Contact', 'Resume'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section.replace(' ', '').toLowerCase()}`}
                  className={currentSection === section ? 'active' : ''}
                  onClick={() => setCurrentSection(section)}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      
      <main>
        {currentSection === 'About Me' && (
          <section id="aboutme">
            <h2>About Me</h2>
            <p>This is the about me section.</p>
          </section>
        )}
        
        {currentSection === 'Portfolio' && (
          <section id="portfolio">
            <h2>Portfolio</h2>
            <p>This is the portfolio section.</p>
          </section>
        )}

        {currentSection === 'Contact' && (
          <section id="contact">
            <h2>Contact</h2>
            <p>This is the contact section.</p>
          </section>
        )}

        {currentSection === 'Resume' && (
          <section id="resume">
            <h2>Resume</h2>
            <p>This is the resume section.</p>
          </section>
        )}
      </main>

      <footer>
        <p>Find me on GitHub, LinkedIn, and Twitter.</p>
      </footer>
    </div>
  );
}

export default App;

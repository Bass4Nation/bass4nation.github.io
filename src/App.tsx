import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save toasdas reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <section className="">
      <header className="navigation-header">
        <nav className="navigation">
          <h1 className="navigation-title">Kristoffer Snopestad Søderkvist</h1>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="about">
        <p>Welcome to my portfolio page!</p>
        <section>
          <p>About me section will be displayed here.</p>
          <p>Hi, I'm Kristoffer! I'm a passionate developer with experience in various technologies.</p>
          <p>I am always eager to learn new skills and take on challenging projects. I am not one that gives up easily. And I'm always looking for ways to improve and grow as a developer.  </p>
        </section>
      </section>
      <section id="projects">
        <p>Projects will be displayed here.</p>
        <ul>
          <li>Project 1: Description of project 1.</li>
          <li>Project 2: Description of project 2.</li>
          <li>Project 3: Description of project 3.</li>
        </ul>
      </section>
      <section id="contact">
        <p>Contact information will be provided here.</p>
      </section>

      <footer>
        <p>© 2024 Kristoffer Snopestad Søderkvist</p>
      </footer>
    </section>
  );
}

export default App;

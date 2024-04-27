import React from 'react';
import './App.css';
import syrianImage from './images/syrian.webp';
import dwarfImage from './images/dwarf.webp';
import roborovskiImage from './images/roborovski.webp';
import chineseImage from './images/chinese.webp';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hamster Haven</h1>
      </header>
      <main>
        <section id="about">
          <h2>About</h2>
          <p>Welcome to Hamster Haven! We are dedicated to providing you with all the information you need to care for your hamster.</p>
        </section>
        <section id="types">
          <h2>Types of Hamsters</h2>
          <ul>
            <li>
              <img src={syrianImage} alt="Syrian Hamster" />
              <p>Syrian Hamster</p>
            </li>
            <li>
              <img src={dwarfImage} alt="Dwarf Hamster" />
              <p>Dwarf Hamster</p>
            </li>
            <li>
              <img src={roborovskiImage} alt="Roborovski Hamster" />
              <p>Roborovski Hamster</p>
            </li>
            <li>
              <img src={chineseImage} alt="Chinese Hamster" />
              <p>Chinese Hamster</p>
            </li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or feedback, feel free to reach out to us at hamsterhaven@example.com.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Hamster Haven. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';
import './styles/Loading.css';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            /* HTML: <div class="loader"></div> */
.loader {
    width: calc(6*30px);
    height: 50px;
    display: flex;
    color: #8d7958;
    filter: drop-shadow(30px 25px 0 currentColor) drop-shadow(60px 0 0 currentColor) drop-shadow(120px 0 0 currentColor);
    clip-path: inset(0 100% 0 0);
    animation: l13 2s infinite steps(7);
  }
  .loader:before {
    content: "";
    width: 30px;
    height: 25px;
    background: 
      radial-gradient(farthest-side at right,currentColor 92%,#0000) left/20px 100% no-repeat,
      radial-gradient(farthest-side,         currentColor 92%,#0000) right/17px 9px repeat-y;
  }
  @keyframes l13 {
    100% {clip-path: inset(0 -30px 0 0)}
  }
        );
    }

    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;

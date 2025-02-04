import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

const App = () => {
    // State to store the current theme
    const [theme, setTheme] = useState('light');
  
    // Toggle theme between light and dark
    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme); // Save theme to localStorage
    };
  
    // Load theme from localStorage on mount
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
    }, []);
  
    return (
      <div className={`app ${theme}`}>
        <header>
          <h1>React Dark/Light Mode</h1>
          <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </header>
        <main>
          <p>This is an example of implementing dark and light mode in React.</p>
        </main>
      </div>
    );
  };

export default App;

import React from 'react';  
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
        // Simulate loading time (e.g., 3 seconds)
        const timer = setTimeout(() => setIsLoading(false), 3000);
        return () => clearTimeout(timer); // Cleanup timeout
    }, []);

    if (isLoading) {
        // Render loading animation
        return (
            <div className="loading-screen">
                <div className="loading-container">
                    <div className="cloud">
                        <div className="cloud-shape"></div>
                        <div className="sun"></div>
                        <div className="rain">
                            <div className="drop"></div>
                            <div className="drop"></div>
                            <div className="drop"></div>
                        </div>
                    </div>
                    <p className="loading-text">Loading... Please wait!</p>
                </div>
            </div>
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

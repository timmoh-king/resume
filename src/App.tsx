import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import References from './components/References';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Blog />
      <Projects />
      <References />
      <Contact />
      <footer className="bg-gray-900 text-white text-center py-8">
        <p>&copy; 2025 Timothy Kariuki. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
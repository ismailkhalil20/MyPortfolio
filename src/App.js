import About from './components/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import HeroProject1, { HeroProject2, HeroProject3 } from './components/HeroProject'


function App() {
  return (
    <div className="bg-nile-blue-600">
      <Header />
      <div className="lg:max-w-6xl text-white mx-10 lg:mx-auto">
        <Hero />
        <h2 className="text-4xl text-yellow-400" id="projects">Projects</h2>
        <HeroProject1 />
        <HeroProject2 />
        <HeroProject3 />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;

import Header from './components/Header'
import Hero from './components/Hero'
import HeroProject1, { HeroProject2, HeroProject3 } from './components/HeroProject'


function App() {
  return (
    <div className="bg-nile-blue-800">
      <Header />
      <div className="lg:max-w-6xl text-white mx-10 lg:mx-auto">
        <Hero />
        <h2 className="text-4xl text-yellow-400" id="projects">Projects</h2>
        <HeroProject1 />
        <HeroProject2 />
        <HeroProject3 />
      </div>
    </div>
  );
}

export default App;

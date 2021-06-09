import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className="bg-nile-blue-800">
      <Header />
      <div className="lg:max-w-6xl text-white mx-10 lg:mx-auto">
        <Hero />
      </div>
    </div>
  );
}

export default App;

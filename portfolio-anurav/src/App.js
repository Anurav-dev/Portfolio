import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Layout/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

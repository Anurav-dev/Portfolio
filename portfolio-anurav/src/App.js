import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Contact />
    </div>
  );
}

export default App;

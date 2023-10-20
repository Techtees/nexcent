import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './styles/globals.css';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;

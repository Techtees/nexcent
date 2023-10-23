import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './styles/globals.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Achievement from './components/achievement/Archievement';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Home />
      <About />
      <Achievement />
    </div>
  );
}

export default App;

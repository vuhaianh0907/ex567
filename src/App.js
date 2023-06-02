
import './App.css';
import Navigation from './components/Navigation';
import Player from './Players';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App-header">
      <Navigation/>
      <Player/>
      <Footer/>
    </div>
  );
}

export default App;

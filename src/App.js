
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer'
import Players from './Players';
function App() {
  return (
    <div className="App-header">
      <Navigation/>
      <Players/>
      <Footer/>
    </div>
  );
}
export default App;

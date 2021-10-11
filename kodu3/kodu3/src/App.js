import logo from './logo.svg';
import Greetings from './components/Greetings';
import Calculate from './components/Calculate';
import Jokes from './components/Jokes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greetings name={"Markus"}/>
      <hr/>
      {/* props */}
      <Calculate num1={1} num2={4} />
      <hr/>
      {/* conditional rendering */}
      <Jokes />
    </div>
  );
}

export default App;

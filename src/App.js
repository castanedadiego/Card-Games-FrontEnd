import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card';
import Hand from './components/hand/Hand';
import ButtonBar from './components/buttonBar/ButtonBar';
import PlayingSpace from './components/playingSpace/PlayingSpace';
import DealerHand from './components/dealerHand/DealerHand';

function App() {
  return (
    <div>
      <DealerHand/>
      <PlayingSpace/>
    </div>
  );
}

export default App;

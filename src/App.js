import {connect} from "react-redux";
import './App.css';
import PlayingSpace from './components/playingSpace/PlayingSpace';
import DealerHand from './components/dealerHand/DealerHand';


function App() {
  return (
    <div>
      <PlayingSpace/>
    </div>
  );
}

export default App;

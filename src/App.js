import './App.css';
import './css/main.css';
import * as data from './data/etsy.json';
import Listing from './components/Listing';

function App() {
  return (
    <div className="App">
      props-listing task<br />
      <Listing items={data} />
    </div>
  );
}

export default App;

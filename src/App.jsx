import logo from './logo.svg';
import './App.css';
import Card from './ui/Card';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <label>Sample expirement with Tailwind.css</label>
        <Card isRound={true}>{
          [1,2,3,4].map((n) => {
            return (
            <Card isRound={true} tw='bg-black'>
              <label>{n}</label>
            </Card>);
          })
        }</Card>
      </header>
    </div>
  );
}

export default App;

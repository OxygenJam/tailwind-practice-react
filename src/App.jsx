import logo from './logo.svg';
import './App.css';
import Card from './ui/Card';
import { CancelButton, ConfirmButton } from './ui/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='box-content h-4/5 w-3/4 border-orange-500 border-1 my-0.5'>
        <h1>Sample shop items</h1>
        <hr/>
        <Card isRound={true}>{
          [1,2,3,4].map((n) => {
            return (
            <Card isRound={true} tw='bg-black'>
              <label className='text-black'>{n}</label>
              <ConfirmButton>Add</ConfirmButton>
              <CancelButton>Remove</CancelButton>
            </Card>);
            })
          }
        </Card>
      </div>
      </header>
    </div>
  );
}

export default App;

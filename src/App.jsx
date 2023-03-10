import logo from './logo.svg';
import './App.css';
import Card from './ui/Card';
import { CancelButton, ConfirmButton } from './ui/Button';
import Banner from './ui/Banner';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='flex justify-between w-full fixed top-0 max-h-14 items-stretch z-50 bg-red-700'>
          <div className='flex flex-1'>
            <img className='flex-none align-middle max-h-fit' src={'https://assets.stickpng.com/images/62306f7fa39b9e9c515e5925.png'}/>
            <h1 className='flex-1 max-h-fit font-bold text-clip'>Jollibee</h1>
          </div>
          <div className='flex-1'>
            <ul className='flex'>
              <li className='flex-col mx-3'>Home</li>
              <li className='flex-col mx-3'>Menu</li>
              <li className='flex-col mx-3'>About</li>
              <li className='flex-col mx-3'>Contact</li>
            </ul>
          </div>
          <div className='flex-1'>
            <ul>
              <li></li>
              <li>Login</li>
            </ul>
            <input className='flex-col max-h-10' type='text'></input>
          </div>
        </div>
      </header>
      <div>
        <Banner />
      </div>
    </div>
  );
}

export default App;

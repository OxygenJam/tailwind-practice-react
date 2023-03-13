import logo from './JBFC.png';
import './App.css';
import Banner from './ui/Banner';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='flex justify-between w-full fixed top-0 max-h-14 items-stretch z-50 bg-red-700'>
          <div className='flex flex-1'>
            <img className='flex-none pl-4 align-middle max-h-[1.5em]' src={logo}/>
            <h1 className='flex-1 pl-4 text-left max-h-fit font-bold text-clip'>Jollibee</h1>
          </div>
          <div className='flex-1'>
            <ul className='flex'>
              <li className='flex-col mx-3'>Home</li>
              <li className='flex-col mx-3'>Menu</li>
              <li className='flex-col mx-3'>About</li>
              <li className='flex-col mx-3'>Contact</li>
            </ul>
          </div>
          <div className='flex-1 '>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="max-h-[1.5em] ml-auto mr-0" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l14 1l-1 7h-13"></path>
              </svg>
            </a>
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

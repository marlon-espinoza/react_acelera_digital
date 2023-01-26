import { useState } from 'react';
import { TravelList } from './components';
import TestingLifeCycle from './widgets/TestingLifeCycle';
import { Users } from './widgets';
// import { Contador } from './widgets';
import { BrowserRouter } from 'react-router-dom';
import ConfigRoutes from './routes';
import Header from './components/Header';

function App() {

  return (
    <div className='App'>
      {/* Incluir aquí el Routing */}
      {/* <Users /> */}
      <BrowserRouter>
        <Header />
        <ConfigRoutes />
      </BrowserRouter>
    </div>
  );
      {/* 
      
        const [ mounted, setMounted ] = useState(true);

        <TravelList />
        <div className="App">
          -- TESTINT LIFE CYCLE
          {(mounted) && <TestingLifeCycle />}
          <div>
            <button onClick={()=>{setMounted(false)}}>Delete component</button>
          </div> 
        </div>
      */}
}

export default App;

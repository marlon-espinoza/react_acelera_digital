import { useState } from 'react';
import { TravelList } from './components';
import TestingLifeCycle from './widgets/TestingLifeCycle';
// import { Contador } from './widgets';

function App() {
  const [ mounted, setMounted ] = useState(true);

  return (
    <div className="App">
      {/* <Contador /> */}
      {/* <TravelList /> */}
      {(mounted) && <TestingLifeCycle />}
      <div>
        <button onClick={()=>{setMounted(false)}}>Delete component</button>
      </div>
    </div>
  );
}

export default App;

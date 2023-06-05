import React from 'react';
import { EasyCounterComponent } from '../entities/ui/easy-counter/easy-counter-component';
import { HardCounterComponent } from '../entities/ui/hard-counter/hard-counter-component';
import "./index.scss"

const App = () => {
  return (
    <div className="App">
      <div className='container'>
        <div className='container-item'>
          <EasyCounterComponent/>
        </div>
        <div className='container-item'>
          <HardCounterComponent/>
        </div>
      </div>
    </div>
  );  
}

export default App;

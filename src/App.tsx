import React from 'react';
import { MockDataService } from './mockDataService';
import './App.css';

const dataService = new MockDataService();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cap Table Dashboard</h1>
      </header>
      <main className='app-main'>
        {/* your implementation here */}
      </main>
    </div>
  );
}

export default App;

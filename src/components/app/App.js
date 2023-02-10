import './app.scss';

import Table from '../Table/Table';
import { useState } from 'react';

function App() {
  
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>{
    setTheme((curr)=>(curr === 'light' ? 'dark' : 'light'));
  }

  
  return (
      <div id={theme}>
        <Table toggleTheme={toggleTheme} />
      </div>
  );
}

export default App;

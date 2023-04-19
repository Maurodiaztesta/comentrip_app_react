
import { useState } from 'react';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import { UserContext } from './contexts/UserContext';

function App() {

  const [privilegios, setPrivilegios] = useState(true)

  return (
    <UserContext.Provider value={{privilegios, setPrivilegios}}>
      <div className={privilegios === true ? "agencia" : "cliente"}>
        <HomePage></HomePage>
      </div>
    </UserContext.Provider>
  );
}

export default App;

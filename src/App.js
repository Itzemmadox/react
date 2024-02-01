import React from 'react';
import './App.css';
import Employee from './components/employee';
import { useState } from 'react';


function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?
        <>
          <input 
              type='text' onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
              }}

          />
            <Employee name="Seun" role="Intern" />
            <Employee name="Emmanuel" role={role}/>
            <Employee name="Festus"/>
        </>  
      : (
        <p>You cannot see the employees</p>
        )}
    </div>
  );
}

export default App;

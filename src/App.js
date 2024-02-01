import React from 'react';
import './App.css';
import Employee from './components/employee';


function App() {
  console.log('We are about to list the employee');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?
        <>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </>  
      : (
        <p>You cannot see the employees</p>
        )}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import PersonCard from './components/personcard';

function App() {
  return (
    <div className="App">
      <div className='person-card'>
        <PersonCard lastName = {"Jane"} firstName = {"Doe"} age = {45} hairColor = {"Black"}  />
        <PersonCard lastName = {"Smith"} firstName = {"John"} age = {88} hairColor = {"Brown"}  />
        <PersonCard lastName = {"Fillmore"} firstName = {"Millard"} age = {50} hairColor = {"Brown"}  />
        <PersonCard lastName = {"Smith"} firstName = {"Maria"} age = {62} hairColor = {"Brown"}  />
      </div>      
    </div>
  );
}

export default App;

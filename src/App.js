import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
    document.title='Akshay Kadu'
  
  // document.title = <p>Ak<span>shay</span>'s portfolio </p>
  return (
    <div className="App">
      
      <Navbar/>
     
    </div>
  );
}

export default App;

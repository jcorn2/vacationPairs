import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Pair from './components/pairGenerator/pair/Pair';

function App() {
  return (
    <div className="App">
        <Header />
        <Pair names={['James', 'Joe']}/>
    </div>
  );
}

export default App;

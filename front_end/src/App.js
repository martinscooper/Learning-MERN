import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/shopping_list';

function App() {
  return (
    <div className="App">
      <AppNavBar/>
      <ShoppingList/>
    </div>
  );
}

export default App;

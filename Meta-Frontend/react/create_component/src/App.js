// import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import RegisterForm from './components/Form';
import FavColor from './components/FavColor';
import Fruits from "./components/Fruits";
import FruitsCounter from "./components/FruitsCounter";
function App() {
  const [fruits] = React.useState([
        {fruitName: 'apple', id: 1},
        {fruitName: 'apple', id: 2},
        {fruitName: 'plum', id: 3},
    ]);
  return (
    <div>
      <Header name='jk' color='purple'/>
      <Main greet='hello'/>
      <Sidebar info='this is sidebar'/>
      <div className="App">
        <Card h2="First card's h2" h3="First card's h3"/>
        <Card h2="2nd card's h2" h3="2nd card's h3"/>
        <Card h2="3rd card's h2" h3="3rd card's h3"/>
      </div>
      <RegisterForm />
      <FavColor/>

      <div>
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits}/>
    </div>
    </div>

    
    
    );
}

export default App;

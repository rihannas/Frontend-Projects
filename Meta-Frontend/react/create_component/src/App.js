// import logo from './logo.svg';
import React from "react";
import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import RegisterForm from './components/Form';
import FavColor from './components/FavColor';
import Fruits from "./components/Fruits";
import FruitsCounter from "./components/FruitsCounter";
import Welcome from "./components/Welcome"
import AboutMe from "./components/AboutMe"

function App() {
  const [fruits] = React.useState([
        {fruitName: 'apple', id: 1},
        {fruitName: 'apple', id: 2},
        {fruitName: 'plum', id: 3},
    ]);
  return (
    <div>
      {/* nav bar making linking clickable */}

      <nav style={{'background-color':'salmon'}}>
        <Link to="/" className="nav-item">HomePage</Link>
        <Link to="/about-me" className="nav-item">About Me</Link>
      </nav>

      {/* setting up routes */}
      <Routes>
          <Route path='/' element={<Welcome />}/>
          <Route path='/about-me' element={<AboutMe />}/>
      </Routes>
      


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
        {/* state lifting */}
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits}/>
    </div>
    </div>

    
    
    );
}

export default App;

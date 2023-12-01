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

    const time = new Date()
    const day = time.toLocaleString('en-us', {weekday:"long"})
    const morning = time.getHours() >= 6 && time.getHours() <=12
    let dayMessage

    if (day.toLowerCase() === 'monday') {
      dayMessage = `Happy ${day}`
    } else if (day.toLowerCase() === 'tuesday'){
      dayMessage = `Happy ${day}, 4 days to go`
    } else if (day.toLowerCase() === 'wednesday'){
      dayMessage = `Happy ${day}, half way there`
    } else if (day.toLowerCase() === 'thurday'){
      dayMessage = `Happy ${day}, start planning the weekend`
    } else if (day.toLowerCase() === 'friday'){
      dayMessage = `Happy ${day}, weekend is coming`
    } else {
      dayMessage = `Happy ${day}, have fun`
    }


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

      <h1>
        {dayMessage}
      </h1>

      {morning ? <h3>Have you had breakfast?</h3> : <h3>Have you had lunch?</h3>}
      

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

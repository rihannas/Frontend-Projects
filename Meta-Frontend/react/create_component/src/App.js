// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Card from './components/Card';

function App() {
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
      
    </div>
    
    );
}

export default App;

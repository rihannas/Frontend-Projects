// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Header name='jk' color='purple'/>
      <Main greet='hello'/>
      <Sidebar info='this is sidebar'/>
    </div>
    
    );
}

export default App;

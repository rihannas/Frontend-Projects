import './App.css';
import DessertsList from './comps/DessertsList';
import NameList from './comps/NameList';
import Comment from './comps/Comment';
import Form from './comps/Form';
import { ThemeProvider } from './comps/ThemeContext';
import Switch from './comps/Switch';

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="App">
        {/* <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
      <NameList />
      <Comment />
      <Form /> */}
      <ThemeProvider>
        <Switch />
      </ThemeProvider>
    </div>
  );

}

export default App;

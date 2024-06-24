import "./App.css";
import {HomeScreen} from './Screens/Home'

const fakelist = [
  {
    id: 0,
    name: "Arroz",
    quantity: 2,
    checked: false,
  },
  {
    id: 1,
    name: "Feijão",
    quantity: 3,
    checked: false,
  },
  {
    id: 2,
    name: "Macarrão",
    quantity: 5,
    checked: false,
  },
];

function App() {
  return (
    <HomeScreen/>
  );
}

export default App;

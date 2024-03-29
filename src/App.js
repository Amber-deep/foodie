import './App.css';
import Meal from './components/Meal';
import RecipeInfo from './components/RecipeInfo';
import "./components/style.css";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Meal />} />
      <Route path='/:MealId' element={<RecipeInfo/>} />
    </Routes>

    </>
  );
}

export default App;

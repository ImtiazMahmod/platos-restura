
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';

import BurgerPage from './Pages/BurgerPage/BurgerPage';
import EditBurger from './Pages/BurgerPage/EditBurger';

import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import EditPizza from './Pages/PizzaPage/EditPizza';

import PizzaPage from './Pages/PizzaPage/PizzaPage';
function App() {
 
  return (
    <div className="App">
     
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/pizza" element={<PizzaPage />}></Route>
          <Route path="/burger" element={<BurgerPage />}></Route>
      
        <Route
          path={`/editPizza/:pizzaId`}
              element={<EditPizza/>}
        />
        <Route
          path={`/editBurger/:burgerId`}
              element={<EditBurger/>}
            />
            
  
            <Route path={`/*`}
              element={<NotFound/>}></Route>
        </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;

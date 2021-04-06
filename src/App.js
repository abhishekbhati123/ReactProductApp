import './App.css';
import React,{useState} from 'react';
import Navbar from  './Components/Layout/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import HotDishes from './Components/Pages/Hotdishes';
import Soup from './Components/Pages/Soup';
import ColdDishes from './Components/Pages/ColdDishes';
import Grill from './Components/Pages/Grill';
import Appetizer from './Components/Pages/Appetizer';
import Dessert from './Components/Pages/Dessert';
import 'bootstrap/dist/css/bootstrap.min.css';
const App=()=> {
 
  return (
    
    <Router>
     
    
    <div className="App">
    <Navbar/>
    
    <Switch>
      <Route exact path="/" component={HotDishes}></Route>
      <Route exact path="/ColdDishesh" component={ColdDishes}></Route>
      <Route path="/Soup" component={Soup}></Route>
      <Route path="/Grill" component={Grill}></Route>
      <Route path="/Appetizer" component={Appetizer}></Route>
      <Route path="/Dessert" component={Dessert}></Route>
    </Switch>
      
    </div>
    </Router>
  
  );
}

export default App;

import React from 'react';
import {NavLink,Link} from 'react-router-dom';

const Navbar=()=>{
return(
    <div>
       <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">FolsyFoodPoint</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><NavLink exact to="/">HotDishes</NavLink></li>
     
      <li><NavLink  to="/ColdDishesh">Cold Dishes</NavLink></li>
      <li><NavLink  to="/Soup">Soup</NavLink></li>
      <li><NavLink  to="/Grill">Grill</NavLink></li>
      <li><NavLink  to="/Appetizer">Appetizer</NavLink></li>
      <li><NavLink  to="/Dessert">Dessert</NavLink></li>
    </ul>
    <form class="navbar-form navbar-left" action="">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Search"/>
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
</nav>
    </div>
)
}
export default Navbar;

{/* <nav className="navbar navbar-expand-lg navbar-darl bg-primary">
<div className="container-fluid">
  <a className="navbar-brand" href="#">
    React User
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" >
    <ul className="navbar-nav me-auto">
      <li className="nav-item">
        <NavLink className="nav-link " exact to="/">
          HotDishes
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/ColdDishesh">
        ColdDishes
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/Soup">
          Soup
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/Grill">
          Grill
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/Appetizer">
          Appetizer
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/Dessert">
          Dessert
        </NavLink>
      </li>
    </ul>
  </div>
  {/* <Link className="btn btn-outline-light" exact to="/users/add">Add User</Link> */}
//</div>
//</nav> 
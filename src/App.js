import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Showdata from './components/showdata';
import Search from './components/search';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Router>
      <Route exact path='/' component={Search} />
      <Route path='/show' component={Showdata} />
    </Router>
    
  );
}

export default App;

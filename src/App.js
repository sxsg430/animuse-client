import React, { useState } from 'react';
import Showdata from './components/showdata';
import Search from './components/search';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path='/' component={Search} />
      <Route path='/show' component={Showdata} />
    </Router>
    
  );
}

export default App;

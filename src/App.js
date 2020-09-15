import React from 'react';
import Showdata from './components/showdata';
import Search from './components/search';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path='/' component={Search} />
      <Route path='/show' component={Showdata} />
    </Router>
    
  );
}

export default App;

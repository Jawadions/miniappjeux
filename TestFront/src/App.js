import './App.css';
import React, {Fragment } from 'react';
import Jeu from './components/jeu/jeu'


import {BrowserRouter as Router } from 'react-router-dom'



function App() {
  


  return (
  <Router>
     
          
           <Fragment> <Jeu/> </Fragment> 
                     
      
    </Router>
    
   
  );
}

export default App;

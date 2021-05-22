import Main from './views/Main'
import ListOfAuthors from './views/ListOfAuthors'
import React, { useState } from 'react'
import './App.css';
import { Router } from '@reach/router'
import AuthorPage from './views/AuthorPage'


function App(props) {
  

  
  return (
    <div className="App">

      <Router>
        <Main path="/author" />
        <AuthorPage path="/list/:id/edit"/>
        <ListOfAuthors path="/list" />
      </Router>


    </div>
  );
}

export default App;

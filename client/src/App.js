import Main from './views/Main'
import ListOfAuthors from './views/ListOfAuthors'
import React, { useState } from 'react'
import './App.css';
import { Router } from '@reach/router'

function App() {
  const [authorName, setAuthorName] = useState([]);
  return (
    <div className="App">
      <Router>
        <Main path="/author" authorName={authorName} setAuthorName={setAuthorName}/>
        <ListOfAuthors path="/list" authorName={authorName} setAuthorName={setAuthorName}/>
      </Router>

    </div>
  );
}

export default App;

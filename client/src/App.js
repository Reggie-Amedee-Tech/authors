import Main from './views/Main'
import React, {useState} from 'react'
import './App.css';

function App() {
  const [authorName, setAuthorName] = useState([]);
  return (
    <div className="App">
      <Main authorName={authorName} setAuthorName={setAuthorName}/>
    </div>
  );
}

export default App;

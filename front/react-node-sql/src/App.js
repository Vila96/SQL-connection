import './App.css';
import {useState} from "react";

function App() {

  let [testDb, setTestDb] = useState("");

  return (
    <div className="App">
        <h1>My CRUD app</h1>
        <label>Search in DB:</label>
        <input type="text" name="searchTest"></input>
        <button>Search</button>


          <h3>Coming soon</h3>
          <label>Add:</label>
          <input type="text" name="addTest" onChange={(event) => {setTestDb = event.target.value}}></input>
          <label>Remove:</label>
          <input type="text" name="removeTest"></input>
    </div>

  );
}

export default App;

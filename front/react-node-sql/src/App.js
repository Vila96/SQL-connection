import './App.css';

function App() {
  return (
    <div className="App">
        <h1>My CRUD app</h1>
        <label>Search in DB</label>
        <input type="text" name="searchTest"></input>
        <button>Search</button>


        <div>
          <h3>Coming soon</h3>
          <input type="text" name="addTest"></input>
          <input type="text" name="removeTest"></input>
        </div>
    </div>

  );
}

export default App;

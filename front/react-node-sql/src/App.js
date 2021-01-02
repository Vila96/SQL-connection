import './App.css';
import {useState} from "react";
import Axios from "axios";

function App() {

  let [testDb, setTestDb] = useState("");
  let [test2Db, setTest2Db] = useState("");

  let [dbData, setDbData] = useState([])

  const insertTest = () => {
    Axios.post("http://localhost:5001/create", {
      testDb: setTestDb, 
      test2Db: setTest2Db
    }).then(() => {
      console.log("data sent to back")
      console.log(setTestDb, setTest2Db)
      setDbData([...dbData, {
        testDb: setTestDb, 
        test2Db: setTest2Db}])
    })
  }
  
  let getDbData = () => {
    Axios.get("http://localhost:5001/get").then((response) => {
      console.log(response.data);
      setDbData(response.data);
    })
  }

  const mapData = dbData.map((val, key) => {
    return (
      <div className="dataContainer"> 
        <p>{val.test}</p>
        <p>{val.test2}</p>
      </div>

    )
  })

  return (
    
    <div className="App">
      
        <h1>My CRUD app</h1>
        <h2>React-Node-SQL</h2>
        <label>Add to DB:</label>
        <input type="text" name="addTest" onChange={(event) => {setTestDb = event.target.value}}></input>
        <input type="text" name="addTest2" onChange={(event) => {setTest2Db = event.target.value}}></input>
        <button onClick={insertTest}>Add</button>
        
        <div >
          <button onClick={getDbData}>Show all data inside DB</button>
          <div class="getContainer">
            {mapData}
          </div>
        </div>
        
          <h3>Coming soon</h3>
          <label>Search:</label>
          <input type="text" name="searchTest"></input>
          <label>Remove:</label>
          <input type="text" name="removeTest"></input>
    </div>

  );
}

export default App;

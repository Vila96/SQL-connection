import './App.css';
import {useState} from "react";
import Axios from "axios";

function App() {

  let [dbData, setDbData] = useState([])

  let [testDb, setTestDb] = useState("");
  let [test2Db, setTest2Db] = useState("");

  let [updateTest1, setUpdateTest1] = useState("")

  const getDbData = () => {
    Axios.get("http://localhost:5001/get").then((response) => {
      console.log(response.data);
      setDbData(response.data);
    })
  }

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

  const updateDbData = (id) => {
    Axios.put("http://localhost:5001/update", {
      test: testDb,
      id: id
    }).then((response) => {
        alert("Data updated")
    })
  }

  const deleteDbData = (id) => {
    Axios.delete(`http://localhost:5001/delete/${id}`)
  }


  const mapData = dbData.map((val, key) => {
    return (
      <div className="dataContainer"> 
        <h3>{val.test}</h3>
        <h3>{val.test2}</h3>
        <div>
          <input type="text" onChange={(event) => {setUpdateTest1 = event.target.value}}></input>
          <button onClick={() => {updateDbData(val.id)}}>Update</button>
          <button onClick={() => {deleteDbData(val.id)}}>Delete</button>
        </div>
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
          <div className="getContainer">
            {mapData}
          </div>
        </div>
        
          <h3>Coming soon</h3>
          <label>Search:</label>
          <input type="text" name="searchTest"></input>
    </div>

  );
}

export default App;

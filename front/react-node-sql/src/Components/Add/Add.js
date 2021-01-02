import {useState} from "react";
import Axios from "axios";

function Add() {

  let [testDb, setTestDb] = useState("");
  let [test2Db, setTest2Db] = useState("");


  const insertTest = () => {
    Axios.post("http://localhost:5001/create", {
      testDb: testDb, 
      test2Db: test2Db
    }).then(() => {
      console.log("data sent to back")
    })
  }
  
  return (
    <div className="App">
        <h1>My CRUD app</h1>
        <h2>React-Node-SQL</h2>
        <label>Add to DB:</label>
        <input type="text" name="addTest" onChange={(event) => {setTestDb = event.target.value}}></input>
        <input type="text" name="addTest/" onChange={(event) => {setTest2Db = event.target.value}}></input>
        <button onClick={insertTest}>Add</button>
    </div>
  );
}

export default Add;

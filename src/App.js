import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [ex,setEx] = useState([])

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(()=>{
    
      async function obtainApi() {
      try {
        let first = await axios.get(url)
        let data = await first.data
        console.log(data[0]);
        setEx(data.map((x)=> {
        return (
          <div className='card'>
            <h3><strong>ID:</strong> {x.id}</h3>
            <p><strong>Name:</strong> {x.name}</p>
            <p><strong>Username:</strong> {x.username}</p>
            <p><strong>Email:</strong> {x.email}</p>
            <p><strong>Website:</strong> {x.website}</p>
            <p><strong>Phone:</strong> {x.phone}</p>
            <p><strong>City:</strong> {x.address.city}</p>
            <p><strong>Street:</strong> {x.address.street} - {x.address.suite}</p>
            <p><strong>Zipcode:</strong> {x.address.zipcode}</p>
            <p><strong>Company:</strong> {x.company.name}</p>
          </div>
        )
      }))
      }catch(error) {
        let err = error.request.status
        setEx(
        <div>
          <h2>Error {err}: Ocurrio un problema</h2>
        </div>)
      }
      finally {
        console.log("S");
      }
    }
    obtainApi()
  },[])

  return (
    <div className="App">
      <h1>API REST TEST - JSON placeholder USERS</h1>
      <div className='cards'>{ex}</div>
    </div>
  )
}

export default App;

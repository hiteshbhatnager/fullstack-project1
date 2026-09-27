import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <h1>make my own server with backend</h1>
      <h2>number of data = {data.length}</h2>

      {
        data.map((data) => (
          <div key={data.id}>
            <h2>content is {data.content}</h2>
            <p>this is unique id of joke {data.id}</p>
          </div>
        ))
      }
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from '../node_modules/axios'

function App() {
  const [count, setCount] = useState(0)



  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.getdrip.com/v2/9967522/subscribers/jacob.perry+july27@drip.com',
    headers: { 
      'Authorization': 'Basic MDY3MmRjNTIyZDNiNjgyN2U0MDY1YzI4NjZiNTkwMjI6',
      'Access-Control-Allow-Origin': '*'
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

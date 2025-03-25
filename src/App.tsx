import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState("Loadgin...")

  //コンポーネントがマウントされた際にAPIを呼び出す
  useEffect(() => {
    const apiUrl = "http://localhost:8080/api/rest_hello"; //SPRINGのエンドポイント
    fetch(apiUrl)
    .then((response) => response.text()) //レスポンスをテキストテキストとして取得
    .then((data) => setMessage(data))
    .catch((error) => setMessage("Error loading message"))
    }, [])

    return(
      <div>
        <h1 id="title">react & spring boot</h1>
        {message}
      </div>
    )
  }




  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
// }

export default App

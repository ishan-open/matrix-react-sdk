import {useEffect} from 'react'
import './App.css'


function App() {
  useEffect(() => {
    import('matrix-react-sdk').then(console.log)
  }, [])
  return (
    <div className="App">
        base
    </div>
  )
}

export default App

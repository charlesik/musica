import './App.css'
import HomePage from './pages/HomePage'
import ChartPage from './pages/ChartPage'
import PlaylistPage from './pages/PlaylistPage'
import { Route, Routes } from 'react-router-dom'



function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/chart/:name" element={<ChartPage/>} />
      <Route path="/playlist" element={<PlaylistPage/>} />
    </Routes>
    
  )
}

export default App

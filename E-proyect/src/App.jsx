import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './Pages/Home.jsx'
import { Error_404 } from './Pages/Error_404.jsx'
import './App.css'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route path='*' element={<Error_404></Error_404>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

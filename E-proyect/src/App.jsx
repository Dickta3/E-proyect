import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HashRouter }from 'react-router-dom'
import { Homepage } from './Pages/Home.jsx'
import { Error_404 } from './Pages/Error_404.jsx'
import './App.css'



function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route path='/*' element={<Error_404></Error_404>}></Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App

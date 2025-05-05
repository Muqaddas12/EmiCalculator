import { BrowserRouter,Routes,Route } from 'react-router-dom'
import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage';
import ERLive from './pages/ERLive';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='ERLive' element={<ERLive/>} />
    <Route path='*' element={<ErrorPage/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App

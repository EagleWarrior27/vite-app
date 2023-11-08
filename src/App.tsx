import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './sections/NavBar';

import Principal from './pages/Principal';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={ <Principal /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/log-out' element={ <Navigate replace to="/" /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

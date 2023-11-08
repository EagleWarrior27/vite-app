import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './sections/NavBar';

import Principal from './pages/Principal';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={ <Principal /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/services' element={ <Services /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/log-out' element={ <Navigate replace to="/" /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

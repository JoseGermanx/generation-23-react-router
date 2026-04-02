
import {Routes, Route} from 'react-router';
import About from './views/About'
import Home from './views/Home';
import User from './views/User';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Routes define grupo de rutas
// Route define una Ruta


function App() {

  return (
    <>
    <NavBar />
    <Routes>
      { /* Rutas  */}
      <Route path='/' element={<Home />} />
      <Route path='/user/:id' element={<User />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />

      { /* Ruta comodín */}
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App

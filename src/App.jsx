
import {Routes, Route} from 'react-router';
import About from './views/About'
import Home from './views/Home';
import User from './views/User';
import Contact from './views/Contact';

// Routes define grupo de rutas
// Route define una Ruta


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user' element={<User />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App

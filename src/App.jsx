
import {Routes, Route} from 'react-router';
import About from './views/About'

// Routes define grupo de rutas
// Route define una Ruta


function App() {

  return (
    <Routes>
      <Route path='/' element={<About />} />
    </Routes>
  )
}

export default App


import './App.css'
import Home from "../src/pages/Home"
import Products from '../src/pages/Products'


function App() {
  return (
   <BrowserRouter>
     <Routes>

  {/* Home Page */}
  <Route path="/" element={<Home />} />

  {/* Product Page */}
  <Route path ='/Products' element = {<Products />} />

  


  </Routes>
    </BrowserRouter>
  )
}

export default App

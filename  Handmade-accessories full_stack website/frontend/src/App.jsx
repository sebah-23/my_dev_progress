
import './App.css'
import Home from "../src/pages/Home"
import Products from '../src/pages/Products'
import ProductDetails from "./pages/ProductDetails/ProductDetails";


function App() {
  return (
   <BrowserRouter>
     <Routes>

  {/* Home Page */}
  <Route path="/" element={<Home />} />

  {/* Product Page */}
  <Route path ='/Products' element = {<Products />} />

  <Route path="/products/:id" element={<ProductDetails />} />

  


  </Routes>
    </BrowserRouter>
  )
}

export default App

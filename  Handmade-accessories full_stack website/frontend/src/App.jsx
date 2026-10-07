
import './App.css'
import Home from "../src/pages/Home"


function App() {
  return (
   <BrowserRouter>
     <Routes>

  {/* Home Page */}
  <Route path="/" element={<Home />} />


  </Routes>
    </BrowserRouter>
  )
}

export default App

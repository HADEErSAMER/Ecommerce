
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collectionpage from"./Pages/Collectionpage"
import Menpage from "./Pages/Menpage"
import Womenpage from "./Pages/Womenpage"
import Aboutpage from"./Pages/Aboutpage"
import Homepage from "./Pages/Homepage"
import './App.css'
import Layoutpage from "./Pages/Layoutpage/Layoutpage";
import Product from "./Components/Product/Product";
import Detailspage from "./Pages/detailspage";
function App() {
  

  return (
    <div id="main">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layoutpage/>}>
    <Route path="Collectionpage"element={<Collectionpage/>}></Route>
    <Route path="Menpage" element={<Menpage/>}></Route>
    <Route path="Womenpage" element={<Womenpage/>}></Route>
    <Route path="Aboutpage" element={<Aboutpage/>}></Route>
    <Route path="Homepage" element={<Homepage/>}></Route>
    <Route path="/details/:id" element={<Detailspage/>} ></Route>
    </Route>
    </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App

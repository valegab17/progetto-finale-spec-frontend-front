import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import DetailPage from "./pages/DetailPage";
export default function App(){
  return(
    <BrowserRouter>
     <Navbar/> 
    <Routes>
      <Route element = {<HomePage/>} path="/" />
      <Route element= {<CategoryPage/>} path="/categoria/:categoryName" />
      <Route element={<DetailPage/>} path="/prodotto/:id"/>
       
         </Routes>
    </BrowserRouter>
  )

}

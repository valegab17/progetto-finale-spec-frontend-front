import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
export default function App(){
  return(
    <BrowserRouter>
     <Navbar/> 
    <Routes>
      <Route element = {<HomePage/>} path="/" />
      <Route element= {<CategoryPage/>} path="/categoria/:categoryName" />
       
         </Routes>
    </BrowserRouter>
  )


}
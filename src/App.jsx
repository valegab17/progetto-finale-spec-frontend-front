import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import DetailPage from "./pages/DetailPage";
import FavoritePage from "./pages/FavoritePage";
import { FavoritesProvider } from "./context/FavoritesContext";
import ComparisonProvider from "./context/ComparisonContext";
import Modal from "./modal/Modal";
export default function App() {
  return (
    <FavoritesProvider>

      <ComparisonProvider>


        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categoria/:categoryName" element={<CategoryPage />} />
            <Route path="/prodotto/:id" element={<DetailPage />} />
            <Route path="/favorites" element={<FavoritePage />} />

          </Routes>

          <Modal />
        </BrowserRouter>
      </ComparisonProvider>


    </FavoritesProvider>
  )

}

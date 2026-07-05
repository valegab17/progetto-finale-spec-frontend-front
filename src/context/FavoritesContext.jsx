import { createContext, useState, useContext } from "react";

const FavoriteContext = createContext(null);

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (product) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.some(p => p.id === product.id)) return prevFavorites;
            return [...prevFavorites, product];
        });
    };

    const removeFromFavorites = (id) => {
        setFavorites((prevFavorites) => prevFavorites.filter(p => p.id !== id));
    };

    const isInFavorites = (id) => {
        return favorites.some(p => p.id === id);
    };

    return (
        <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isInFavorites }}>
            {children}
        </FavoriteContext.Provider>
    );
}

export function useFavorites() {
const context = useContext(FavoriteContext);
if (!context){
    throw new Error("Attenzione, questo hook può essere utilizzato solo all'interno del suo contesto")
}
return context;
}
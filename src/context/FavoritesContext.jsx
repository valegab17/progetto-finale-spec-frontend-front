import { createContext, useState, useContext, useEffect } from "react";

const FavoriteContext = createContext(null);

export function FavoritesProvider({ children }) {
    // 1. Inizializzazione lazy leggendo da localStorage
    const [favorites, setFavorites] = useState(() => {
        try {
            const saved = localStorage.getItem("emporio_favorites");
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error("Errore nel recupero dei preferiti da localStorage:", error);
            return [];
        }
    });

    // 2. Salvataggio automatico ad ogni modifica dell'array
    useEffect(() => {
        try {
            localStorage.setItem("emporio_favorites", JSON.stringify(favorites));
        } catch (error) {
            console.error("Errore nel salvataggio dei preferiti su localStorage:", error);
        }
    }, [favorites]);

    const addToFavorites = (product) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.some((p) => p.id === product.id)) return prevFavorites;
            return [...prevFavorites, product];
        });
    };

    const removeFromFavorites = (id) => {
        setFavorites((prevFavorites) => prevFavorites.filter((p) => p.id !== id));
    };

    const isInFavorites = (id) => {
        return favorites.some((p) => p.id === id);
    };

    return (
        <FavoriteContext.Provider
            value={{ favorites, addToFavorites, removeFromFavorites, isInFavorites }}
        >
            {children}
        </FavoriteContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoriteContext);
    return context;
}
import { createContext, useContext, useRef, useState, useEffect } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favorites";

const FavoritesProvider = ({ children }) => {
  const favorites = useRef([]);

  return (
    <FavoritesContext.Provider value={{ favorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoriteContext = () => {
  const { favorites } = useContext(FavoritesContext);

  const updateFav = (selected) => {
    const isRepeated = favorites.current.some((item) => item === selected);
    if (!isRepeated) {
      favorites.current = [...favorites.current, selected];
      return;
    }
    favorites.current = favorites.current.filter((fav) => fav !== selected);
    return;
  };
  return { favorites, updateFav };
};

export default FavoritesProvider;

import { createContext, useContext, useState } from "react";


export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favorites";


const FavoritesProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([]);

	return (
		<FavoritesContext.Provider value={{favorites, setFavorites }}>
			{children}
		</FavoritesContext.Provider>
	)
}


export const useFavoriteContext = () => {
	const { favorites, setFavorites } = useContext(FavoritesContext)

	const updateFav = (selected) => {
		const isRepeated = favorites.some(item => item.id === selected.id)
		if (!isRepeated) return setFavorites([...favorites, selected])
		return setFavorites(favorites.filter(fav => fav.id !== selected.id))
	}
	return { favorites, updateFav }
}

export default FavoritesProvider

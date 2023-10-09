import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BasePage from './pages/basePage'
import Home from './pages/home'
import Favorites from './pages/favorites'
import Player from './pages/player'
import NotFound from './pages/notFound'


const AppRoutes = () => {
	return (
		<BrowserRouter>
					<Routes>
						<Route path="/" element={<BasePage />}>
							<Route index element={<Home />}></Route>
							<Route path="favoritos" element={<Favorites favoritesKeys={[]}/>}></Route>
							<Route path="videos/:id" element={<Player />}></Route>
							<Route path="*" element={<NotFound msg="Página não encontrada" />}></Route>
						</Route>
					</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes

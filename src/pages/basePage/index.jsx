import { Outlet } from 'react-router-dom'
import Header from 'components/header'
import FavoritesProvider from 'contexts/favoritesProvider'
import Container from 'components/container'
import Footer from 'components/footer'

const BasePage = () => {
	return (
		<main>
			<Header />
			<FavoritesProvider>
				<Container>
					<Outlet />
				</Container>
			</FavoritesProvider>
			<Footer />
			</main>
	)

}

export default BasePage

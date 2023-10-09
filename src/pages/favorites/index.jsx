import { useState, useEffect } from 'react'

import { useFavoriteContext } from 'contexts/favoritesProvider'

import Banner from 'components/banner'
import Title from 'components/title'
import Card from 'components/card'

import homeStyle from 'pages/home/home.module.css'


const Favorites = () => {
	const { favorites } = useFavoriteContext()

	return (
		<>
		<Banner img="favoritos"/>
		<Title><h1>Meus Favoritos</h1></Title>
		<section className={homeStyle.container}>
			{favorites.map(fav => {
				return (
			<Card 
				id={fav.id}
				key={fav.id}
				title={fav.title}
				cover={fav.cover}
			/>
				)
			})}
		</section>
		</>
	)
}

export default Favorites

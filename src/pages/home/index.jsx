import { useState, useEffect } from 'react'

import Banner from 'components/banner'
import Title from 'components/title'
import Card from 'components/card'

import homeStyle from './home.module.css'


const Home = () => {
	const [videos, setVideos] = useState([])

	useEffect(() => {
		fetch(`https://my-json-server.typicode.com/JeffVenancius/cinetag-api/videos`)
		.then(res => res.json())
		.then(data => setVideos([...data]))
	}, [])

	return (
		<>
		<Banner img="home"/>
		<Title><h1>Um lugar para guardar seus vídeos e filmes!</h1></Title>
		<section className={homeStyle.container}>
			{videos.map(video => {
				return (
			<Card 
				id={video.id}
				key={video.id}
				title={video.title}
				cover={video.cover}
				link={video.link}
			/>
				)
			})}
		</section>
		</>
	)
}

export default Home

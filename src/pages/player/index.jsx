import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import NotFound from 'pages/notFound'
import Banner from 'components/banner'
import Title from 'components/title'

import playerStyle from './player.module.css'


const Player = () => {
	const [video, setVideo] = useState({link: "await for video"})
	const params = useParams()

	useEffect(() => {
		fetch(`https://my-json-server.typicode.com/JeffVenancius/cinetag-api/videos?id=${params.id}`)
		.then(res => res.json())
		.then(data => setVideo(...data))
	}, [])

	if (video.link === "await for video") {
		return (
			<>
				<Banner img="player" />
				<Title><h1>Buscando vídeo...</h1></Title>
			</>
		)
	} else if (!video.link) {
		return (
			<>
				<Banner img="player" />
				<NotFound msg="Vídeo não encontrado" />
			</>
		)
	}
	
	return (
		<>
			<Banner img="player" />
			<Title><h1>{video.title}</h1></Title>
			<section>
				<iframe 
					width="100%"
					height="100%" 
					src={video.link} 
					title={video.title}
					frameBorder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					allowFullScreen
				></iframe>
				</section>
		</>
	)
}

export default Player

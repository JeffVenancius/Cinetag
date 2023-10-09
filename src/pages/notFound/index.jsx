import Title from 'components/title'

import notFoundStyle from './notFound.module.css'


const NotFound = ({ msg }) => {
	return (
		<section className={notFoundStyle.container}>
			<Title><h1>Ops!</h1></Title>
			<p>{msg}</p>
		</section>
	)
}

export default NotFound

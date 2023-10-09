import containerStyle from './container.module.css'


const Container = ({ children }) => {
	return (
		<section className={containerStyle.container}>
			{children}
		</section>

	)
}

export default Container

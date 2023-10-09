import titleStyle from './title.module.css'


const Title = ( { children } ) => {
	return (
		<div className={titleStyle.label}>{children}</div>
	)
}

export default Title

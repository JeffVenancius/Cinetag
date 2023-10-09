import { Link } from 'react-router-dom'

import headerLinkStyle from './headerLink.module.css'


const HeaderLink = ({ url, children }) => {
	return (
		<Link to={url} className={headerLinkStyle.link}>
			{children}
		</Link>
	)
}

export default HeaderLink

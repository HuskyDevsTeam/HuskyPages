import React, { useContext } from "react"
import CTA from "./CTA"
import "./styles.css"
import HeaderSocials from "./HeaderSocials"
import ThemeContext from "../../context/Context"


function Header() {
	const {style} = useContext(ThemeContext)
	return (
		<header id="header" style={style}>
			<div className="container header__container">
				<h5>Welcome, we are</h5>
				<h1>Husky Developers</h1>
				<h5>A Software Company</h5>
				<CTA />
				<HeaderSocials />
				<div className="me">
					<img src="" alt="yo" />
				</div>
				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
	)
}

export default Header
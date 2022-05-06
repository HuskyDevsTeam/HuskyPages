import React from "react"
import CTA from "./CTA"
import "./styles.css"
import HeaderSocials from "./HeaderSocials"

function Header() {
	return (
		<header id="header">
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
import React from "react"
import "./styles.css"
import { FaFacebook } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { IoLogoGithub } from "react-icons/io"

function Footer() {
	return (
		<footer id="footer">
			<a href="#" className="footer__logo">
				HUSKY DEVS
			</a>
			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#testimonials">Testimonials</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className="footer__socials">
				<a href="https://facebook.com/huskydevteam">
					<FaFacebook />
				</a>
				<a href="https://instagram.com/huskydevteam">
					<FiInstagram />
				</a>
				<a href="https://github.com/huskydevteam">
					<IoLogoGithub />
				</a>
			</div>
			<div className="footer__copyright">
				<small>&copy; HUSKY DEVS. All rights reserved.</small>
			</div>
		</footer>
	)
}

export default Footer

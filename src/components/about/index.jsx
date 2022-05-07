import React from "react"
import "./styles.css"
import Card from "./Card"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

function About() {
	return (
		<section
			id="about"
			style={{
				"--color-primary": "#16ee66",
				"--color-primary-variant": "#25aa00",
			}}
		>
			<h5>To know</h5>
			<h2>About us</h2>
			<div className="container about__container">
				<div className="about__me">
					<img className="about__me-image" src="" alt="About image" />
				</div>
				<div className="about__content">
					<div className="about__cards">
						<Card
							title="Experience"
							subtitle="4+ Years Working"
							Icon={FaAward}
						/>
						<Card
							title="Technologies"
							subtitle="20+ Specialized"
							Icon={FiUsers}
						/>
						<Card
							title="Projects"
							subtitle="10+ completed"
							Icon={VscFolderLibrary}
						/>
					</div>
					<p>
						We are your best alternative on software development, growing faster
						our multidisciplinary profesional team offers you solutions to start
						or mantain your apps projects in order to make client's life easier
						as posible, with high quality products that shines in intuitive,
						design, speed, originality, flexibility and support post delivery.
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	)
}

export default About

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
							subtitle="3+ Years Working"
							Icon={FaAward}
						/>
						<Card title="Clients" subtitle="200+ Worldwide" Icon={FiUsers} />
						<Card
							title="Projects"
							subtitle="80+ completed"
							Icon={VscFolderLibrary}
						/>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
						ea, officiis sunt ut rerum suscipit asperiores amet mollitia!
						Mollitia ab cupiditate illum quam omnis esse excepturi tempora,
						eligendi minus repellat.
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

import React from "react"
import "./styles.css"
import { BiCheck } from "react-icons/bi"

const SERVICES = [
	{
		title: "UI/UX Design",
		color: "#ff9616",
		subcolor: "#b80c00",
		services: [
			"User interface (UI) design",
			"User experience (UX) design",
			"Color palette",
			"Logo design",
			"Layouts alternatives",
			"Visual themes",
		],
	},
	{
		title: "Web Development",
		color: "#1696ff",
		subcolor: "#0022b8",
		services: [
			"Avanced animations",
			"Responsive apps/webpages",
			"Single Page Application",
			"Server Side Rendering",
			"Website/App deployment",
			"UI atomic components",
			"API development",
			"DevOps & Server Settings",
		],
	},
	{
		title: "Content Creation",
		color: "#16ee66",
		subcolor: "#25aa00",
		services: [
			"Social media posting",
			"Comunity management",
			"Copywritting",
			"Stories maker",
			"Quality followers",
		],
	},
]

function Services() {
	return (
		<section id="services">
			<h5>What We Offer</h5>
			<h2>Services</h2>
			<div className="container services__container">
				{SERVICES.map(({ title, color, subcolor, services }) => (
					<article
						className="service"
						style={{
							"--color-primary": color,
							"--color-primary-variant": subcolor,
						}}
					>
						<div className="service__head">
							<h3>{title}</h3>
						</div>
						<ul className="service__list">
							{services.map((text) => (
								<li>
									<BiCheck className="service__list-icon" />
									<p>
										{text}
									</p>
								</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</section>
	)
}

export default Services

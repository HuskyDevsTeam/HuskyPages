import React from "react"
import "./styles.css"

const IMAGES = [
	{ color: "#ff9616", subcolor: "#b80c00", url: "img/portfolio1.jpg" },
	{ color: "#1696ff", subcolor: "#0022b8", url: "img/portfolio2.jpg" },
	{ color: "#16ee66", subcolor: "#25aa00", url: "img/portfolio3.jpg" },
	{ color: "#ff9616", subcolor: "#b80c00", url: "img/portfolio4.jpg" },
	{ color: "#1696ff", subcolor: "#0022b8", url: "img/portfolio5.jpg" },
	{ color: "#16ee66", subcolor: "#25aa00", url: "img/portfolio6.jpg" },
]

function Portfolio() {
	return (
		<section id="portfolio">
			<h5>Our Last Works</h5>
			<h2>Portfolio</h2>
			<div className="container portfolio__container">
				{IMAGES.map(({color, subcolor, url}, index) => {
					return (
						<article
							key={index}
							className="portfolio__item"
							style={{
								"--color-primary": color,
								"--color-primary-variant": subcolor,
							}}
						>
							<div className="portfolio__item-image">
								<img src={url} alt="portfolio1" />
							</div>
							<h3>This is a portfolio item title</h3>
							<div className="portfolio__item-cta">
								<a href="https://github.com" className="btn" target="_blank">
									Github
								</a>
								<a
									href="https://dribble.com"
									className="btn btn-primary"
									target="_blank"
								>
									Live Demo
								</a>
							</div>
						</article>
					)
				})}
			</div>
		</section>
	)
}

export default Portfolio

import React from "react"
import "./styles.css"

const IMAGES = [
	{
		color: "#ff9616",
		subcolor: "#b80c00",
		url: "img/portfolio1.jpg",
		live: "http://3.89.139.22/",
		repo: "https://github.com/chemimartinez10/MARS",
		title: "MARS Management system with Laravel and VueJs",
	},
	{
		color: "#1696ff",
		subcolor: "#0022b8",
		url: "img/portfolio2.jpg",
		live: "https://campusproductivity.com",
		repo: "https://github.com/manuelrrk/KoachTeam3",
		title: "E-learning web app for a client using Django, Python and MySQL \n Username:test \n Password:test",
	},
	{
		color: "#16ee66",
		subcolor: "#25aa00",
		url: "img/portfolio3.jpg",
		live: "https://huskychat-php-production.up.railway.app/",
		repo: "https://github.com/chemimartinez10/huskychat-php",
		title: "Realtime chat with PHP and JS",
	},
	{
		color: "#ff9616",
		subcolor: "#b80c00",
		url: "img/portfolio4.jpg",
		live: "https://insuraca.online",
		repo: "#portfolio",
		title: "Webpage for client Inversiones y Construcciones Suramerica, C.A.",
	},
	{
		color: "#1696ff",
		subcolor: "#0022b8",
		url: "img/portfolio5.jpg",
		live: "https://twotter-tutorial-g37mfx9fz-chemimartinez10.vercel.app",
		repo: "https://github.com/chemimartinez10/twotter-tutorial",
		title: "Twitter's clone with VueJs 3",
	},
	{
		color: "#16ee66",
		subcolor: "#25aa00",
		url: "img/portfolio6.jpg",
		live: "#",
		repo: "#",
		title: "",
	},
]

function Portfolio() {
	return (
		<section id="portfolio">
			<h5>Our Last Works</h5>
			<h2>Portfolio</h2>
			<div className="container portfolio__container">
				{IMAGES.map(({title, color, subcolor, url, live, repo}, index) => {
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
							<h3>{title}</h3>
							<div className="portfolio__item-cta">
								<a href={repo} className="btn" target="_blank">
									Github
								</a>
								<a
									href={live}
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

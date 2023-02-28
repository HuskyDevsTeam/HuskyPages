import React from "react"
import "./styles.css"
import ModalCustom from "../modal/index"
import Snake from "./snake"

const IMAGES = [
	{
		color: "#ff9616",
		subcolor: "#b80c00",
		url: "img/game1.jpg",
		repo: "https://github.com/huskydevteam/react-snake",
		title: "Classic Snake game made on JS",
	},
]

function Portfolio() {
	return (
		<section id="games">
			<h5>With love for u</h5>
			<h2>Games</h2>
			<div className="container games__container">
				{IMAGES.map(({title, color, subcolor, url, live, repo}, index) => {
					return (
						<article
							key={index}
							className="game__item"
							style={{
								"--color-primary": color,
								"--color-primary-variant": subcolor,
							}}
						>
							<div className="portfolio__item-image">
								<img src={url} alt="portfolio1" />
							</div>
							<h3>{title}</h3>
							<div className="game__item-cta">
								<a href={repo} className="btn" target="_blank">
									Github
								</a>
								{
									<ModalCustom background="#05191a">
										<Snake />
									</ModalCustom>
								}
							</div>
						</article>
					)
				})}
			</div>
		</section>
	)
}

export default Portfolio

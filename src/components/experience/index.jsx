import React from "react"
import "./styles.css"
import { BsPatchCheckFill } from "react-icons/bs"

function Experience() {
	return (
		<section
			id="experience"
			style={{
				"--color-primary": "#ff9616",
				"--color-primary-variant": "#b80c00",
			}}
		>
			<h5>Technologies We Have Worked</h5>
			<h2>Our Experience at your service</h2>
			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>HTML</h4>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>CSS</h4>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>SASS</h4>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Bootstrap</h4>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>JavaScript</h4>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Vue</h4>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>React</h4>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Angular</h4>
							</div>
						</article>
					</div>
				</div>
				<div className="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Node JS</h4>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>PHP</h4>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Laravel</h4>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Python</h4>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Django</h4>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>MySQL</h4>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>MongoDB</h4>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Posgress SQL</h4>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience

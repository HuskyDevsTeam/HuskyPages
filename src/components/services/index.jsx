import React from "react"
import "./styles.css"
import { BiCheck } from "react-icons/bi"

function Services() {
	return (
		<section id="services">
			<h5>What We Offer</h5>
			<h2>Services</h2>
			<div className="container services__container">
				<article
					className="service"
					style={{
						"--color-primary": "#ff9616",
						"--color-primary-variant": "#b80c00",
					}}
				>
					<div className="service__head">
						<h3>UI/UX Design</h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
								consequuntur!
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
								consequuntur!
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
								consequuntur!
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
								consequuntur!
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
								consequuntur!
							</p>
						</li>
					</ul>
				</article>
				<article
					className="service"
					style={{
						"--color-primary": "#1696ff",
						"--color-primary-variant": "#0022b8",
					}}
				>
					<div className="service__head">
						<h3>Web Development</h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
								consequuntur!
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
								consequuntur!
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
								consequuntur!
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
								consequuntur!
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
								consequuntur!
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
								consequuntur!
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
								consequuntur!
							</p>
						</li>
					</ul>
				</article>
				<article
					className="service"
					style={{
						"--color-primary": "#16ee66",
						"--color-primary-variant": "#25aa00",
					}}
				>
					<div className="service__head">
						<h3>Content Creation</h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
								consequuntur!
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
								consequuntur!
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
								consequuntur!
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
								consequuntur!
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
								consequuntur!
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
								consequuntur!
							</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	)
}

export default Services

import React from "react"
import "./styles.css"
import { FaShieldAlt, FaRunning, FaMedal } from "react-icons/fa"
import Card from "../about/Card"

function Development() {
	return (
		<section
			id="about"
			style={{
				"--color-primary": "#16ee66",
				"--color-primary-variant": "#25aa00",
			}}
		>
			<h5>Feed your dreams</h5>
			<h2>Make it real</h2>
			<div className="container dev__container">
				<div className="dev__content">
					<div className="dev__cards">
						<Card
							isCircle={true}
							title="Security"
							subtitle="Best security practices"
							Icon={FaShieldAlt}
						/>
						<Card
							isCircle={true}
							title="Speed"
							subtitle="In record time"
							Icon={FaRunning}
						/>
						<Card
							isCircle={true}
							title="Quality"
							subtitle="100% guaranteed"
							Icon={FaMedal}
						/>
					</div>
					<div className="dev__me">
						<img src={'img/phone_hand.png'} alt="phone" />
					</div>
					<div className="dev__info">
						<p>
							Let your dreams guide the way to your future, together we can develop the next great application, with our highly qualified team, your projects will be completed faster than they seem.
						</p>
						<a href="#contact" className="btn btn-primary">
							I want to be part
						</a>

					</div>
				</div>
			</div>
		</section>
	)
}

export default Development

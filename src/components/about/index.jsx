import React from "react"
import "./styles.css"
import Card from "./Card"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const Spline = React.lazy(() => import("@splinetool/react-spline"))
import { Suspense } from "react"

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
					{/* <iframe
						src="https://my.spline.design/wolf-5515a60ffbf6dadcf213ba0025f963d4/"
						frameborder="0"
						width="100%"
						height="100%"
						target="_blank"
					></iframe> */}
					<Suspense fallback={<div>Loading...</div>}>
						<Spline scene="https://prod.spline.design/zmJP2M3U6dJrB8nG/scene.splinecode" />
					</Suspense>
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

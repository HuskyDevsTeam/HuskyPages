import React from "react"
import "./styles.css"
import { FaServer, FaDesktop, FaMobile } from "react-icons/fa"
import Card from "../about/Card"

function Product() {
	return (
		<section
			id="product"
		>
			<h5>Build together with us that flagship software product</h5>
			<h2>From your website to your business</h2>
			<div className="container product__container">
				<div className="product__content">
					<div className="product__me">
						<img src={'img/happy_model.png'} alt="phone" />
					</div>
					<div className="product__cards">
						<Card
							title="Server API"
							subtitle="We develop your server application to be consumed by your client solution."
							Icon={FaServer}
						/>
						<Card
							title="Web"
							subtitle="We shape your identity on the Internet with your own website, to contact customers and services."
							Icon={FaDesktop}
						/>
						<Card
							title="Native application"
							subtitle="All the power of a system in the palm of your hand, from a simple app to videogame."
							Icon={FaMobile}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Product

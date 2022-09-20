import React from "react"
import "./styles.css"

import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

const CLIENTS = [
	{
		avatar: "img/avatar1.png",
		name: "Andrés Zúñiga (Workhana User)",
		title: "App Xamarin Forms",
		review: "Very good disposition and flexibility",
	},
	{
		avatar: "img/avatar2.png",
		name: "Alí Palacios (President of Koach Soluciones Integrales, C.A.)",
		title: "Django E-Learning software",
		review: "Pleasant and very professional teamwork as well as the results.",
	},
	{
		avatar: "img/avatar3.png",
		title: "Web-based personnel and equipment management system",
		name: "Gerardo Carrasquero (President of Inversiones y Construcciones Suramerica, C.A.",
		review:
			"MARS is an excellent app to bring more efficiency to our business and let us make best strategic decisions",
	},
]

function Testimonials() {
	return (
		<section id="testimonials">
			<h5>Review From Clients</h5>
			<h2>Testimonials</h2>
			<Swiper
				className="container testimonials__container"
				modules={[Pagination]}
				pagination={{ clickable: true }}
				spaceBetween={40}
				slidesPerView={1}
			>
				{CLIENTS.map(({ avatar, name, title, review }, index) => {
					return (
						<SwiperSlide key={index}>
							<article className="testimonial">
								<div className="client-avatar">
									<img src={avatar} alt="client avatar" />
								</div>
								{title ? <h4>{title}</h4>:""}
								<small className="client-review">{review}</small>
								<br />
								<h5 className="client-name">{name}</h5>
							</article>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials

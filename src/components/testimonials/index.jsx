import React from "react"
import "./styles.css"

import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

const CLIENTS = [
	{
		avatar: "img/avatar1.png",
		name: "Jhon Doe",
		review:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus itaque quis quo ipsa tempora tempore deleniti, ipsam architecto distinctio debitis voluptatum vitae vero reiciendis recusandae temporibus, doloribus delectus sint quos!",
	},
	{
		avatar: "img/avatar2.png",
		name: "Mary Anne",
		review:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus itaque quis quo ipsa tempora temporvoluptatum vitae vero reiciendis recusandae temporibus, doloribus delectus sint quos!",
	},
	{
		avatar: "img/avatar3.png",
		name: "Kendall Yu",
		review:
			"Lorem, ipsum dng elit. Natus itaque quis quo ipsa tempora tempore deleniti, ipsam architecto distinctio debitis voluptatum vitae vero reiciendis recusandae temporibus, doloribus delectus sint quos!",
	},
	{
		avatar: "img/avatar4.png",
		name: "Evan McAggie",
		review:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus itaque quis quo ipsa o reiciendis recusandae temporibus, doloribus delectus sint quos!",
	},
	{
		avatar: "img/avatar5.png",
		name: "Stephen Clue",
		review:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus itaque quis quo ipsa tempora tempore deleniti,!",
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
				{CLIENTS.map(({ avatar, name, review }, index) => {
					return (
						<SwiperSlide key={index}>
							<article className="testimonial">
								<div className="client-avatar">
									<img src={avatar} alt="client avatar" />
								</div>
								<h5 className="client-name">{name}</h5>
								<small className="client-review">{review}</small>
							</article>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials
